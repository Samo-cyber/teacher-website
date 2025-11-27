'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, FormEvent } from "react";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import supabase from '@/lib/supabase/browserClient';

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setEmailExists(false);
    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, phone }
        }
      });

      if (signUpError) {
        const msg = signUpError.message ?? "حدث خطأ أثناء التسجيل.";
        const exists = /already registered|duplicate|user exists|already exists/i.test(msg);
        setError(msg);
        setEmailExists(exists);
        setLoading(false);
        return;
      }

      const userId = data?.user?.id ?? null;
      if (userId) {
        try {
          await supabase.from("profiles").insert({
            id: userId,
            email,
            full_name: name,
            phone
          });
        } catch (_) {
          // تجاهل خطأ الإدراج حتى لا نكسر تجربة التسجيل
        }
      }

      // عرض شاشة الإشعار (تم الإرسال) — بدون تحويل
      setSuccess(true);
      setLoading(false);

    } catch (err: any) {
      setError(err?.message ?? "حدث خطأ أثناء إنشاء الحساب.");
      setLoading(false);
    }
  };

  // شاشة النجاح (check-email style)
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
        <div className="max-w-lg w-full space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <CheckCircle2 size={40} className="text-primary-2" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-primary-1">
            تم إرسال رسالة إلى بريدك الإلكتروني
          </h2>

          <p className="text-sm text-primary-1/60 mt-1">
            يرجى التحقق من صندوق الوارد أو البريد غير المرغوب فيه (Spam)
          </p>

          <div className="mt-4">
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-2 text-white font-medium"
            >
              الذهاب إلى تسجيل الدخول
            </Link>
          </div>

          <p className="text-xs text-primary-1/40 pt-3 border-t border-secondary-3 mt-4">
            جميع الحقوق محفوظة © {new Date().getFullYear()} Smarto
          </p>
        </div>
      </div>
    );
  }

  // الفورم الأصلية
  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-secondary-2/30">
      <div className="w-full max-w-[95%] sm:max-w-lg space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary-2">

        <div className="text-center pb-2.5 border-b border-secondary-3">
          {/* لو عايز تشيل الرابط للـ home احذفه من هنا */}
          <Link href="/" className="text-sm text-primary-2 hover:text-primary-1 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>العودة للرئيسية</span>
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-1">إنشاء حساب جديد</h2>
          <p className="mt-1.5 text-sm sm:text-base text-primary-1/60">
            انضم إلينا وابدأ رحلة التفوق
          </p>
        </div>

        <form className="mt-4 space-y-3.5" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-sm">
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

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-primary-1/80 mb-1.5">الاسم الكامل</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none relative block w-full px-4 py-2.5 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                placeholder="محمد أحمد"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-1/80 mb-1.5">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-4 py-2.5 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-1/80 mb-1.5">رقم الهاتف</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="appearance-none relative block w-full px-4 py-2.5 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                placeholder="01xxxxxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-1/80 mb-1.5">كلمة المرور</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-2.5 border border-secondary-3 placeholder-gray-400 text-primary-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-2/20 focus:border-primary-2 text-base transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-1/40 hover:text-primary-1/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full py-3 text-base" disabled={loading}>
            {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-primary-1/60">لديك حساب بالفعل؟ </span>
          <Link href="/auth/login" className="font-bold text-primary-1 hover:text-primary-2">
            سجل دخولك
          </Link>
        </div>

        <div className="text-center text-xs text-primary-1/40 pt-2 border-t border-secondary-3">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} Smarto</p>
        </div>

      </div>
    </div>
  );
}
