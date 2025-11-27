"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher' | 'admin';
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (name: string, email: string, phone: string, password: string) => Promise<{ success: boolean; message: string; emailExists?: boolean }>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Failed to parse stored user:', error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            // TODO: Replace with actual API call to backend
            // Check if user exists in registered users
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const existingUser = registeredUsers.find((u: User) => u.email === email);

            if (existingUser && email && password) {
                setUser(existingUser);
                localStorage.setItem('user', JSON.stringify(existingUser));
                return true;
            } else if (email && password) {
                // For backward compatibility, accept any credentials
                const mockUser: User = {
                    id: Date.now().toString(),
                    name: email.split('@')[0],
                    email: email,
                    role: 'student'
                };

                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const signup = async (name: string, email: string, phone: string, password: string): Promise<{ success: boolean; message: string; emailExists?: boolean }> => {
        try {
            // Get existing registered users
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

            // Check if email already exists
            const emailExists = registeredUsers.some((u: User) => u.email === email);

            if (emailExists) {
                return {
                    success: false,
                    message: 'هذا البريد الإلكتروني مسجل بالفعل',
                    emailExists: true
                };
            }

            // Create new user
            const newUser: User = {
                id: Date.now().toString(),
                name: name,
                email: email,
                role: 'student'
            };

            // Add to registered users
            registeredUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

            return {
                success: true,
                message: 'تم تسجيل الحساب بنجاح'
            };
        } catch (error) {
            console.error('Signup error:', error);
            return {
                success: false,
                message: 'حدث خطأ أثناء إنشاء الحساب'
            };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/');
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
