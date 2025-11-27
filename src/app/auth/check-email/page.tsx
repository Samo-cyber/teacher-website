'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { CheckCircle2 } from "lucide-react";

function maskEmail(email: string) {
  if (!email) return "";
  const [local, domain] = email.split("@");
  if (!domain) return email;
  if (local.length <= 2) return `${local[0]}***@${domain}`;
  const visible = Math.min(3, Math.max(1, Math.floor(local.length / 2)));
  return `${local.slice(0, visible)}***@${domain}`;
}

export default function CheckEmailPage() {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email") ?? "";

  const maskedEmail = useMemo(() => maskEmail(email), [email]);

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

        {/* إظهار الإيميل المقنّع إن وُجد */}
        {maskedEmail ? (
          <p className="text-sm text-primary-1/70">
            أرسلنا الرسالة إلى: <span className="font-medium text-primary-1/90">{maskedEmail}</span>
          </p>
        ) : null}

        {/* الشرح */}
        <p className="text-sm text-primary-1/60">
          يرجى التحقق من صندوق الوارد أو البريد غير المرغوب فيه (Spam)
        </p>

        {/* رابط إعادة الإرسال (اختياري) وزر تسجيل الدخول */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-2 text-white font-medium"
          >
            الذهاب إلى تسجيل الدخول
          </Link>

          <Link
            href="/auth/resend"
            className="text-sm text-primary-2 underline hover:text-primary-1"
          >
            إعادة إرسال رسالة التفعيل
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
