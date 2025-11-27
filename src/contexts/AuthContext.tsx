"use client";

import { createContext, useContext, useEffect, useState } from "react";
import supabase from "@/lib/supabase/browserClient";

interface AuthContextType {
  user: any;
  loading: boolean;
  signup: (name: string, email: string, phone: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load session on mount
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    };

    getSession();

    // Listen to session changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // ---------------------------
  // SIGNUP
  // ---------------------------

  const signup = async (name: string, email: string, phone: string, password: string) => {
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

      // optional update to ensure metadata persists:
      await supabase.auth.updateUser({
        data: { full_name: name, phone },
      });

      return { success: true };
    } catch (e: any) {
      return { success: false, message: e?.message || "Signup failed" };
    }
  };

  // ---------------------------
  // LOGIN
  // ---------------------------

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return false;

    setUser(data.user);
    return true;
  };

  // ---------------------------
  // LOGOUT
  // ---------------------------

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
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
