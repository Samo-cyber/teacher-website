"use client";

import { createContext, useContext, useEffect, useState } from "react";
import supabase from "@/lib/supabase/browserClient";

interface AuthResult {
    success: boolean;
    message?: string;
}

interface AuthContextType {
    user: any;
    loading: boolean;
    signup: (name: string, email: string, phone: string, password: string) => Promise<AuthResult>;
    login: (email: string, password: string) => Promise<AuthResult>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Load session on mount
    useEffect(() => {
        const getSession = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                setUser(data.session?.user || null);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        // Listen to session changes
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            // safe unsubscribe
            try {
                listener.subscription.unsubscribe();
            } catch {
                // ignore
            }
        };
    }, []);

    // ---------------------------
    // SIGNUP
    // ---------------------------

    const signup = async (name: string, email: string, phone: string, password: string): Promise<AuthResult> => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                        phone: phone,
                    },
                },
            });

            if (error) {
                return { success: false, message: error.message };
            }

            // Ensure metadata persists (best-effort)
            try {
                await supabase.auth.updateUser({
                    data: { full_name: name, phone },
                });
            } catch {
                // ignore update errors
            }

            return { success: true, message: "تم إنشاء الحساب. تحقق من بريدك لتأكيد الحساب." };
        } catch (e: any) {
            return { success: false, message: e?.message || "Signup failed" };
        }
    };

    // ---------------------------
    // LOGIN
    // ---------------------------

    const login = async (email: string, password: string): Promise<AuthResult> => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return {
                    success: false,
                    message: error.message || "فشل تسجيل الدخول",
                };
            }

            setUser(data.user);

            return {
                success: true,
                message: "تم تسجيل الدخول بنجاح",
            };
        } catch (err: any) {
            return {
                success: false,
                message: err?.message || "خطأ غير متوقع",
            };
        }
    };

    // ---------------------------
    // LOGOUT
    // ---------------------------

    const logout = async () => {
        try {
            await supabase.auth.signOut();
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                signup,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
