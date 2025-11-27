// src/app/auth/check-email/page.tsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckEmailPage() {
    return (
        <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
            <div className="max-w-lg w-full space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2 text-center">

                {/* الدائرة الخضرا + علامة الصح */}
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                </div>

                {/* العنوان */}
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">
                    تم إرسال رسالة إلى بريدك الإلكتروني
                </h2>

                {/* الشرح */}
                <p className="text-sm text-primary-1/60">
                    يرجى التحقق من صندوق الوارد أو البريد غير المرغوب فيه (Spam)
                </p>

                {/* زر تسجيل الدخول */}
                <div className="mt-4">
                    <Link
                        href="/auth/login"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-2 text-white font-medium"
                    >
                        الذهاب إلى تسجيل الدخول
                    </Link>
                </div>

                {/* فوتر */}
                <p className="text-xs text-primary-1/40 pt-3 border-t border-secondary-3 mt-4">
                    جميع الحقوق محفوظة © {new Date().getFullYear()} Smarto
                </p>
            </div>
        </div>
    );
}
