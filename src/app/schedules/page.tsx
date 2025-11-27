import { ClassCard } from "@/components/ui/ClassCard";
import { Button } from "@/components/ui/Button";
import { Filter } from "lucide-react";

export default function SchedulesPage() {
    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-1 mb-2">الجداول الدراسية</h1>
                        <p className="text-primary-1/70">تصفح جميع الحصص المتاحة واحجز مقعدك الآن</p>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2 bg-white">
                            <Filter size={18} />
                            تصفية
                        </Button>
                        <select className="bg-white border border-primary-1 rounded-md px-4 py-2 text-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-2/20">
                            <option>جميع الصفوف</option>
                            <option>الصف الأول الثانوي</option>
                            <option>الصف الثاني الثانوي</option>
                            <option>الصف الثالث الثانوي</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <ClassCard
                            key={i}
                            id={`class-${i}`}
                            title={
                                i % 3 === 0 ? "الفلسفة الوجودية وسارتر" :
                                    i % 3 === 1 ? "مقدمة في المنطق الرمزي" :
                                        "علم النفس النمو: المراهقة"
                            }
                            description="شرح تفصيلي للمفاهيم الأساسية مع حل أسئلة وتدريبات عملية من امتحانات سابقة."
                            grade={i > 3 ? "الصف الثاني الثانوي" : "الصف الثالث الثانوي"}
                            date={`الجمعة، ${15 + i} نوفمبر`}
                            time="04:00 م"
                            studentsCount={80 + i * 5}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
