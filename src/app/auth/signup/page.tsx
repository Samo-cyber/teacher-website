import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SignupPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg border border-secondary-2">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-primary-1">إنشاء حساب جديد</h2>
                    <p className="mt-2 text-sm text-primary-1/60">
                        انضم إلينا وابدأ رحلة التفوق
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary-1/80 mb-1">
                                الاسم الكامل
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 sm:text-sm transition-all"
                                placeholder="محمد أحمد"
                            />
                        </div>
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
                            <label htmlFor="phone" className="block text-sm font-medium text-primary-1/80 mb-1">
                                رقم الهاتف
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 sm:text-sm transition-all"
                                placeholder="01xxxxxxxxx"
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
                                autoComplete="new-password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 sm:text-sm transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full" size="lg">
                            إنشاء الحساب
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <span className="text-primary-1/60">لديك حساب بالفعل؟ </span>
                    <Link href="/auth/login" className="font-bold text-primary-1 hover:text-primary-2">
                        سجل دخولك
                    </Link>
                </div>
            </div>
        </div>
    );
}
