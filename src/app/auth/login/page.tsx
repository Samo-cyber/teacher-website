import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg border border-secondary-2">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-primary-1">تسجيل الدخول</h2>
                    <p className="mt-2 text-sm text-primary-1/60">
                        أهلاً بك مجدداً في منصة التفوق
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary-1/80 mb-1">
                                البريد الإلكتروني
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 sm:text-sm transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-primary-1/80 mb-1">
                                كلمة المرور
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 sm:text-sm transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary-1 focus:ring-primary-1 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="mr-2 block text-sm text-primary-1/70">
                                تذكرني
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary-2 hover:text-primary-1">
                                نسيت كلمة المرور؟
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full" size="lg">
                            تسجيل الدخول
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <span className="text-primary-1/60">ليس لديك حساب؟ </span>
                    <Link href="/auth/signup" className="font-bold text-primary-1 hover:text-primary-2">
                        أنشئ حساباً جديداً
                    </Link>
                </div>
            </div>
        </div>
    );
}
