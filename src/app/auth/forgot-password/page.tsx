'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import supabase from '@/lib/supabase/browserClient';

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
            // طلب Supabase لإرسال رابط استعادة كلمة المرور
            const { error: sbError } = await supabase.auth.resetPasswordForEmail(email, {
                // اختياري: تحدد الـ redirect إذا حبيت
                // redirectTo: `${window.location.origin}/auth/callback`
            });

            if (sbError) {
                // عرض رسالة الخطأ من Supabase إن وُجدت
                setError(sbError.message || "حدث خطأ أثناء إرسال رابط الاستعادة.");
            } else {
                setSuccess(true);
            }
        } catch (err: any) {
            setError(err?.message ?? "حدث خطأ. يرجى المحاولة مرة أخرى.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
                <div className="max-w-lg w-full space-y-5 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-secondary-2 text-center">
                    <div className="flex justify-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={48} className="text-green-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">تم إرسال رابط استعادة كلمة المرور</h2>
                    <p className="text-sm sm:text-base text-primary-1/60">
                        تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد الخاص بك.
                    </p>
                    <div className="pt-2">
                        <Link href="/auth/login">
                            <Button className="w-full py-3.5 text-base flex items-center justify-center gap-2">
                                <span>العودة لتسجيل الدخول</span>
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

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
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-1">استعادة كلمة المرور</h2>
                    <p className="mt-2 text-sm sm:text-base text-primary-1/60">
                        أدخل بريدك الإلكتروني وسنرسل لك رابط استعادة كلمة المرور
                    </p>
                </div>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            <p className="font-medium">{error}</p>
                            <p className="mt-1.5">
                                <Link href="/auth/signup" className="underline hover:text-red-700">
                                    ليس لديك حساب؟ سجل الآن
                                </Link>
                            </p>
                        </div>
                    )}
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
                        <Button type="submit" className="w-full py-3.5 text-base" disabled={loading}>
                            {loading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm space-y-2">
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
                    <p>جميع الحقوق محفوظه © {new Date().getFullYear()} Smarto</p>
                </div>
            </div>
        </div>
    );
}
