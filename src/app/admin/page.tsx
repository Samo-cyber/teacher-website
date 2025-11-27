import { Users, BookOpen, DollarSign, Settings } from "lucide-react";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-primary-1">لوحة الإدارة</h1>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-bold text-primary-1">
                        Admin Panel
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "المستخدمين", value: "2,450", icon: <Users size={24} /> },
                        { label: "الحصص النشطة", value: "45", icon: <BookOpen size={24} /> },
                        { label: "إجمالي الدخل", value: "150k", icon: <DollarSign size={24} /> },
                        { label: "إعدادات النظام", value: "نشط", icon: <Settings size={24} /> },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-2 flex items-center justify-between">
                            <div>
                                <p className="text-primary-1/60 text-sm mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-primary-1">{stat.value}</h3>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-secondary-2 flex items-center justify-center text-primary-1">
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-2 overflow-hidden mb-8">
                    <div className="p-6 border-b border-secondary-2 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-primary-1">أحدث المستخدمين</h3>
                        <button className="text-sm text-primary-2 hover:underline">عرض الكل</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead className="bg-secondary-2/30 text-primary-1/70 text-sm">
                                <tr>
                                    <th className="px-6 py-4 font-medium">الاسم</th>
                                    <th className="px-6 py-4 font-medium">البريد الإلكتروني</th>
                                    <th className="px-6 py-4 font-medium">الدور</th>
                                    <th className="px-6 py-4 font-medium">تاريخ التسجيل</th>
                                    <th className="px-6 py-4 font-medium">الحالة</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-secondary-2/10 transition-colors">
                                        <td className="px-6 py-4 font-medium text-primary-1">مستخدم {i}</td>
                                        <td className="px-6 py-4 text-primary-1/70">user{i}@example.com</td>
                                        <td className="px-6 py-4 text-primary-1/70">طالب</td>
                                        <td className="px-6 py-4 text-primary-1/70">2024-11-{10 + i}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                                                نشط
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
