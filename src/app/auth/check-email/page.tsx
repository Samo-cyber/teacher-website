// src/app/auth/check-email/page.tsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
      <div className="max-w-lg w-full space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">تم إرسال رسالة إلى بريدك</h2>

        <p className="text-sm text-primary-1/60">
          لقد أرسلنا إليك رسالة تحتوي على رابط التفعيل أو تعليمات تسجيل الدخول إلى البريد الذي قمت بإدخاله.
        </p>

        <div className="mt-2 px-4 py-3 bg-primary-1/5 rounded-md text-sm text-primary-1/90">
          <strong>تحقق من صندوق الوارد أو مجلد البريد غير المرغوب فيه (Spam).</strong>
        </div>

        <p className="text-sm text-primary-1/60 mt-2">
          إن لم تصل الرسالة خلال دقيقتين، يمكنك{" "}
          <Link href="/auth/resend" className="font-medium text-primary-2 underline">
            إعادة إرسال رسالة التفعيل
          </Link>{" "}
          أو المتابعة لتسجيل الدخول بعد التحقق.
        </p>

        <div className="flex gap-3 justify-center mt-4">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary-2 bg-primary-2/10 text-primary-2 font-medium"
          >
            اذهب لتسجيل الدخول
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-secondary-3 text-primary-1"
          >
            العودة للرئيسية
          </Link>
        </div>

        <p className="text-xs text-primary-1/40 pt-3 border-t border-secondary-3">
          جميع الحقوق محفوظة © {new Date().getFullYear()} Smarto
        </p>
      </div>
    </div>
  );
}
