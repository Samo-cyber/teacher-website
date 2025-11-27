// src/app/auth/check-email/page.tsx
import Link from "next/link";

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
      <div className="max-w-lg w-full space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">تم إرسال رسالة إلى بريدك</h2>

        <p className="text-sm text-primary-1/70">
          لقد أرسلنا إليك رسالة تحتوي على رابط التفعيل أو تعليمات تسجيل الدخول إلى:
        </p>

        <div className="mt-2 px-4 py-3 bg-primary-1/5 rounded-md text-sm text-primary-1/90">
          <strong>تحقق من صندوق الوارد أو مجلد البريد غير المرغوب فيه (Spam).</strong>
        </div>

        <p className="text-sm text-primary-1/60 mt-2">
          إن لم تصل الرسالة خلال دقيقتين، يمكنك <Link href="/auth/resend" className="font-medium text-primary-2 underline">إعادة إرسال رسالة التفعيل</Link> أو المتابعة لتسجيل الدخول بعد التحقق.
        </p>

        <div className="flex gap-3 justify-center mt-4">
          <Link href="/auth/login" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary-2 bg-primary-2/10 text-primary-2 font-medium">
            اذهب لتسجيل الدخول
          </Link>
          <Link href="/" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-secondary-3 text-primary-1">
            العودة للرئيسية
          </Link>
        </div>

        <p className="text-xs text-primary-1/40 pt-3 border-t border-secondary-3">جميع الحقوق محفوظة © {new Date().getFullYear()} Smarto</p>
      </div>
    </div>
  );
}
