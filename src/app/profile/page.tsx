'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, LogOut } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import supabase from "@/lib/supabase/browserClient";

function ProfileContent() {
    const { user, logout } = useAuth();
    const [profile, setProfile] = useState<any>(null);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [fetchError, setFetchError] = useState<string>("");

    // helper to read metadata fields safely (handles raw_user_meta_data or user_metadata)
    const getMeta = (key: string) => {
        try {
            // some Supabase setups put metadata in raw_user_meta_data (jsonb) or in user_metadata
            const raw = (user as any)?.raw_user_meta_data ?? (user as any)?.user_metadata ?? {};
            return raw ? (raw[key] ?? null) : null;
        } catch {
            return null;
        }
    };

    useEffect(() => {
        const loadProfile = async () => {
            if (!user?.id) return;
            setLoadingProfile(true);
            setFetchError("");
            try {
                // Try to load from "profiles" table if you have it
                const { data, error } = await supabase
                    .from("profiles")
                    .select("id, full_name, phone, email")
                    .eq("id", user.id)
                    .single();

                if (error && (error as any).code !== "PGRST116") {
                    // if error is "no rows" that's fine, otherwise keep error for debug
                    // PGRST116 is PostgREST "No rows were found" code in some setups — ignore it
                }

                if (data) {
                    setProfile(data);
                } else {
                    setProfile(null);
                }
            } catch (err: any) {
                setFetchError(err?.message ?? "حدث خطأ أثناء جلب بيانات الملف.");
                setProfile(null);
            } finally {
                setLoadingProfile(false);
            }
        };

        loadProfile();
    }, [user?.id]);

    // Derive displayed values with priority:
    // 1) profiles table
    // 2) auth raw_user_meta_data / user_metadata
    // 3) fallback to available user fields (email / phone)
    const displayName =
        profile?.full_name ||
        getMeta("full_name") ||
        getMeta("name") ||
        (user?.email ? user.email.split("@")[0] : "مستخدم");

    const displayEmail =
        profile?.email || user?.email || "";

    const displayPhone =
        profile?.phone ||
        getMeta("phone") ||
        (user as any)?.phone ||
        "غير متوفر";

    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary-1">الملف الشخصي</h1>
                    <Button variant="outline" onClick={logout} className="flex items-center gap-2">
                        <LogOut size={18} />
                        تسجيل الخروج
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-secondary-2 overflow-hidden">
                    {/* Header / Cover */}
                    <div className="h-32 bg-primary-1/10 relative">
                        <div className="absolute -bottom-12 right-8">
                            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md">
                                <div className="w-full h-full rounded-full bg-secondary-2 flex items-center justify-center text-primary-1">
                                    <User size={40} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 px-8 pb-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary-1">{displayName}</h2>
                                <p className="text-primary-1/60">{/* role placeholder */}طالب - الصف الثالث الثانوي</p>
                            </div>
                            <Button variant="outline">تعديل الملف</Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-primary-1 border-b border-secondary-2 pb-2">
                                    البيانات الشخصية
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-primary-1/80">
                                        <Mail size={20} className="text-primary-2" />
                                        <span>{displayEmail || 'لا يوجد بريد إلكتروني'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-primary-1/80">
                                        <Phone size={20} className="text-primary-2" />
                                        <span>{displayPhone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-primary-1/80">
                                        <MapPin size={20} className="text-primary-2" />
                                        <span>القاهرة، مصر</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-primary-1 border-b border-secondary-2 pb-2">
                                    إحصائيات
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-secondary-2/30 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-primary-1">12</div>
                                        <div className="text-sm text-primary-1/60">حصة مكتملة</div>
                                    </div>
                                    <div className="bg-secondary-2/30 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-primary-1">5</div>
                                        <div className="text-sm text-primary-1/60">أسئلة مجابة</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {loadingProfile && (
                            <div className="mt-6 text-sm text-primary-1/60">جاري تحميل بيانات الملف...</div>
                        )}

                        {fetchError && (
                            <div className="mt-6 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md text-sm">
                                {fetchError}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    );
}
