"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Check if email exists in registered users
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const userExists = registeredUsers.some((u: any) => u.email === email);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (userExists) {
                setSuccess(true);
            } else {
                setError("لا يوجد حساب مسجل بهذا البريد الإلكتروني");
            }
        } catch (err) {
            setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
                <div className="max-w-md w-full space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2 text-center">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={40} className="text-green-600" />
                        </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary-1">تم إرسال رابط استعادة كلمة المرور</h2>
                    <p className="text-xs sm:text-sm text-primary-1/60">
                        تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد الخاص بك.
                    </p>
                    <div className="pt-2">
                        <Link href="/auth/login">
                            <Button className="w-full py-2 sm:py-3 flex items-center justify-center gap-2">
                                <span>العودة لتسجيل الدخول</span>
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="w-full max-w-[90%] sm:max-w-md space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">استعادة كلمة المرور</h2>
                    <p className="mt-1 text-xs sm:text-sm text-primary-1/60">
                        أدخل بريدك الإلكتروني وسنرسل لك رابط استعادة كلمة المرور
                    </p>
                </div>
                <form className="mt-3 space-y-3" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs sm:text-sm">
                            <p className="font-medium">{error}</p>
                            <p className="mt-1">
                                <Link href="/auth/signup" className="underline hover:text-red-700">
                                    ليس لديك حساب؟ سجل الآن
                                </Link>
                            </p>
                        </div>
                    )}
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
                        <Button type="submit" className="w-full py-2 sm:py-3" disabled={loading}>
                            {loading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
                        </Button>
                    </div>
                </form>

                <div className="text-center text-xs sm:text-sm space-y-1">
                    <div>
                        <Link href="/auth/login" className="font-medium text-primary-2 hover:text-primary-1">
                            العودة لتسجيل الدخول
                        </Link>
                    </div>
                    <div>
                        <span className="text-primary-1/60">ليس لديك حساب؟ </span>
                        <Link href="/auth/signup" className="font-bold text-primary-1 hover:text-primary-2">
                            سجل الآن
                        </Link>
                    </div>
                </div>

                <div className="text-center text-xs text-primary-1/40 pt-2 border-t border-secondary-3">
                    © 2024 Ahmed Salah. جميع الحقوق محفوظة
                </div>
            </div>
        </div>
    );
}
