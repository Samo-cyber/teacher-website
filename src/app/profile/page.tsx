"use client";

import { Button } from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, LogOut } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";

function ProfileContent() {
    const { user, logout } = useAuth();

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
                                <h2 className="text-2xl font-bold text-primary-1">{user?.name || 'مستخدم'}</h2>
                                <p className="text-primary-1/60">طالب - الصف الثالث الثانوي</p>
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
                                        <span>{user?.email || 'لا يوجد بريد إلكتروني'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-primary-1/80">
                                        <Phone size={20} className="text-primary-2" />
                                        <span>01012345678</span>
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
