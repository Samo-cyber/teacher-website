import Link from "next/link";
import { Facebook, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary-2 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-1">أحمد صلاح</h3>
                        <p className="text-primary-1/80 leading-relaxed">
                            مدرس الفلسفة وعلم النفس. نسعى لتقديم محتوى تعليمي متميز يساعد الطلاب على التفوق والفهم العميق.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-primary-1">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/schedules" className="text-primary-1/80 hover:text-primary-1 transition-colors">
                                    الجداول الدراسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/questions" className="text-primary-1/80 hover:text-primary-1 transition-colors">
                                    بنك الأسئلة
                                </Link>
                            </li>
                            <li>
                                <Link href="/teacher" className="text-primary-1/80 hover:text-primary-1 transition-colors">
                                    لوحة المعلم
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-primary-1">تواصل معنا</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/201153320488"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-primary-1/80 hover:text-primary-1 transition-colors"
                            >
                                <Phone size={20} />
                                <span dir="ltr">+20 115 332 0488</span>
                            </a>
                            <a
                                href="https://facebook.com/Mr.AhmedSalah.Philosophy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-primary-1/80 hover:text-primary-1 transition-colors"
                            >
                                <Facebook size={20} />
                                <span>@Mr.AhmedSalah.Philosophy</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-secondary-3 pt-8 text-center text-primary-1/60 text-sm">
                    <p>جميع الحقوق محفوظه © {new Date().getFullYear()} Smarto</p>
                </div>
            </div>
        </footer>
    );
}
