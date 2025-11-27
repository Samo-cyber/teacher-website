'use client';

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
            const result = await login(email, password);
            // login returns an object like { success: boolean, message?: string }
            if (result && (result as any).success) {
                router.push('/');
            } else {
                const msg = (result && (result as any).message) ? (result as any).message : "فشل تسجيل الدخول. يرجى التحقق من البريد أو كلمة المرور.";
                setError(msg);
            }
        } catch (err: any) {
            setError(err?.message ?? "حدث خطأ أثناء تسجيل الدخول.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="w-full max-w-[95%] sm:max-w-lg space-y-5 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-secondary-2">
                {/* Home Link */}
                <div className="text-center pb-3 border-b border-secondary-3">
                    <Link href="/" className="text-sm text-primary-2 hover:text-primary-1 transition-colors inline-flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>العودة للرئيسية</span>
                    </Link>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-1">تسجيل الدخول</h2>
                    <p className="mt-2 text-sm sm:text-base text-primary-1/60">
                        أهلاً بك مجدداً في منصة التفوق
                    </p>
                </div>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary-1/80 mb-2">
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
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-primary-1/80 mb-2">
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
                                    className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-1/40 hover:text-primary-1/60 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary-1 focus:ring-primary-1 border-gray-300 rounded"
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
                        <Button type="submit" className="w-full py-3.5 text-base" disabled={loading}>
                            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <span className="text-primary-1/60">ليس لديك حساب؟ </span>
                    <Link href="/auth/signup" className="font-bold text-primary-1 hover:text-primary-2">
                        أنشئ حساباً جديداً
                    </Link>
                </div>

                <div className="text-center text-xs text-primary-1/40 pt-2 border-t border-secondary-3">
                    <p>جميع الحقوق محفوظه © {new Date().getFullYear()} Smarto</p>
                </div>
            </div>
        </div>
    );
}
