import { TeacherReplyPanel } from "@/components/ui/TeacherReplyPanel";
import { QuestionsList } from "@/components/ui/QuestionsList";
import { Users, MessageCircle, DollarSign, BookOpen } from "lucide-react";

export default function TeacherDashboardPage() {
    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-primary-1 mb-8">لوحة تحكم المعلم</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "إجمالي الطلاب", value: "1,250", icon: <Users size={24} />, color: "bg-blue-100 text-blue-600" },
                        { label: "أسئلة جديدة", value: "15", icon: <MessageCircle size={24} />, color: "bg-yellow-100 text-yellow-600" },
                        { label: "حصص قادمة", value: "8", icon: <BookOpen size={24} />, color: "bg-purple-100 text-purple-600" },
                        { label: "أرباح الشهر", value: "25k", icon: <DollarSign size={24} />, color: "bg-green-100 text-green-600" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-2 flex items-center justify-between">
                            <div>
                                <p className="text-primary-1/60 text-sm mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-primary-1">{stat.value}</h3>
                            </div>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Questions */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-primary-1">أسئلة تحتاج للرد</h2>
                        <TeacherReplyPanel />
                        <QuestionsList />
                    </div>

                    {/* Upcoming Classes Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-2xl font-bold text-primary-1">جدول اليوم</h2>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-2 space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4 pb-4 border-b border-secondary-2 last:border-0 last:pb-0">
                                    <div className="bg-secondary-2 text-primary-1 font-bold px-3 py-2 rounded-lg text-center min-w-[60px]">
                                        <div className="text-sm">0{4 + i}:00</div>
                                        <div className="text-xs opacity-70">م</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-1 text-sm">مراجعة المنطق - 3 ثانوي</h4>
                                        <p className="text-primary-1/60 text-xs mt-1">120 طالب مسجل</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
