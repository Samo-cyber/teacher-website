"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setEmailExists(false);
        setLoading(true);

        try {
            const result = await signup(name, email, phone, password);

            if (result.success) {
                setSuccess(true);
                // Redirect to login after 2 seconds
                setTimeout(() => {
                    router.push('/auth/login');
                }, 2000);
            } else {
                setError(result.message);
                if (result.emailExists) {
                    setEmailExists(true);
                }
            }
        } catch (err) {
            setError("حدث خطأ أثناء إنشاء الحساب.");
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">تم تسجيل الحساب بنجاح!</h2>
                    <p className="text-sm text-primary-1/60">
                        سيتم تحويلك إلى صفحة تسجيل الدخول...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="w-full max-w-[90%] sm:max-w-md space-y-3 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">إنشاء حساب جديد</h2>
                    <p className="mt-1 text-xs sm:text-sm text-primary-1/60">
                        انضم إلينا وابدأ رحلة التفوق
                    </p>
                </div>
                <form className="mt-3 space-y-3" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs sm:text-sm">
                            <p className="font-medium">{error}</p>
                            {emailExists && (
                                <p className="mt-1">
                                    <Link href="/auth/forgot-password" className="underline hover:text-red-700">
                                        هل نسيت كلمة المرور؟ اضغط هنا لاستعادتها
                                    </Link>
                                </p>
                            )}
                        </div>
                    )}
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-primary-1/80 mb-1">
                                الاسم الكامل
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-sm transition-all"
                                placeholder="محمد أحمد"
                            />
                        </div>
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
                            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-primary-1/80 mb-1">
                                رقم الهاتف
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-sm transition-all"
                                placeholder="01xxxxxxxxx"
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
                                    autoComplete="new-password"
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

                    <div>
                        <Button type="submit" className="w-full py-2 sm:py-3" disabled={loading}>
                            {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
                        </Button>
                    </div>
                </form>

                <div className="text-center text-xs sm:text-sm">
                    <span className="text-primary-1/60">لديك حساب بالفعل؟ </span>
                    <Link href="/auth/login" className="font-bold text-primary-1 hover:text-primary-2">
                        سجل دخولك
                    </Link>
                </div>

                <div className="text-center text-xs text-primary-1/40 pt-2 border-t border-secondary-3">
                    © 2024 Ahmed Salah. جميع الحقوق محفوظة
                </div>
            </div>
        </div>
    );
}
