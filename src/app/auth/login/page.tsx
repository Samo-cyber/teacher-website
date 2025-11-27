"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const success = await login(email, password);
            if (success) {
                router.push('/');
            } else {
                setError("فشل تسجيل الدخول. يرجى التحقق من البيانات.");
            }
        } catch (err) {
            setError("حدث خطأ أثناء تسجيل الدخول.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="w-full max-w-[90%] sm:max-w-md space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">تسجيل الدخول</h2>
                    <p className="mt-1 text-xs sm:text-sm text-primary-1/60">
                        أهلاً بك مجدداً في منصة التفوق
                    </p>
                </div>
                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs sm:text-sm">
                            {error}
                        </div>
                    )}
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-primary-1/80 mb-1">
                                البريد الإلكتروني
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-sm transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-primary-1/80 mb-1">
                                كلمة المرور
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-sm transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-1/40 hover:text-primary-1/60 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-3 w-3 sm:h-4 sm:w-4 text-primary-1 focus:ring-primary-1 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="mr-2 block text-primary-1/70">
                                تذكرني
                            </label>
                        </div>

                        <div>
                            <Link href="/auth/forgot-password" className="font-medium text-primary-2 hover:text-primary-1">
                                نسيت كلمة المرور؟
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full py-2 sm:py-3" disabled={loading}>
                            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                        </Button>
                    </div>
                </form>

                <div className="text-center text-xs sm:text-sm">
                    <span className="text-primary-1/60">ليس لديك حساب؟ </span>
                    <Link href="/auth/signup" className="font-bold text-primary-1 hover:text-primary-2">
                        أنشئ حساباً جديداً
                    </Link>
                </div>

                <div className="text-center text-xs text-primary-1/40 pt-2 border-t border-secondary-3">
                    © 2024 Ahmed Salah. جميع الحقوق محفوظة
                </div>
            </div>
        </div>
    );
}
