"use client";

import { createContext, useContext, useEffect, useState } from "react";
import supabase from "@/lib/supabase/browserClient";

interface AuthResult {
    success: boolean;
    message?: string;
    raw?: any;
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

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                console.log("getSession data:", data);
                setUser(data.session?.user || null);
            } catch (e) {
                console.error("getSession error:", e);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log("onAuthStateChange", _event, session);
            setUser(session?.user || null);
        });

        return () => {
            try {
                listener.subscription.unsubscribe();
            } catch { }
        };
    }, []);

    const signup = async (name: string, email: string, phone: string, password: string): Promise<AuthResult> => {
        try {
            const res = await supabase.auth.signUp({
                email,
                password,
                options: { data: { full_name: name, phone } },
            });
            console.log("signUp response:", res);

            // if supabase returns user null (because confirm required), still attempt updateUser to persist metadata
            if (res.error) {
                return { success: false, message: res.error.message, raw: res };
            }

            // try updateUser as best-effort (may fail if no session yet)
            try {
                const upd = await supabase.auth.updateUser({ data: { full_name: name, phone } });
                console.log("updateUser after signUp:", upd);
            } catch (e) {
                console.warn("updateUser failed (expected if no session):", e);
            }

            return { success: true, message: "تم إنشاء الحساب. تحقق من بريدك لتأكيد الحساب.", raw: res };
        } catch (e: any) {
            console.error("signup exception:", e);
            return { success: false, message: e?.message || "Signup failed", raw: e };
        }
    };

    const login = async (email: string, password: string): Promise<AuthResult> => {
        try {
            const res = await supabase.auth.signInWithPassword({ email, password });
            console.log("signInWithPassword response:", res);

            if (res.error) {
                // common causes: invalid credentials, email not confirmed (message tells)
                return { success: false, message: res.error.message || "فشل تسجيل الدخول", raw: res };
            }

            setUser(res.data.user);
            return { success: true, message: "تم تسجيل الدخول بنجاح", raw: res };
        } catch (e: any) {
            console.error("login exception:", e);
            return { success: false, message: e?.message || "خطأ غير متوقع", raw: e };
        }
    };

    const logout = async () => {
        try {
            const res = await supabase.auth.signOut();
            console.log("signOut response:", res);
        } catch (e) {
            console.error("signOut error:", e);
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
