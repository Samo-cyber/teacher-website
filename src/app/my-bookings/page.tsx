import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Video } from "lucide-react";
import Link from "next/link";

export default function MyBookingsPage() {
    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-primary-1 mb-8">حجوزاتي</h1>

                <div className="space-y-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-2 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-accent/20 text-primary-1 text-xs font-bold px-3 py-1 rounded-full">
                                        قادم
                                    </span>
                                    <h3 className="text-xl font-bold text-primary-1">
                                        {i === 1 ? "مراجعة ليلة الامتحان - فلسفة" : "ورشة عمل علم النفس"}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-6 text-primary-1/70 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        <span>الجمعة، 20 نوفمبر</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} />
                                        <span>06:00 م - 08:00 م</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Video size={18} />
                                        <span>أونلاين (Zoom)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 w-full md:w-auto">
                                <Link href={`/class/class-${i}`} className="flex-1 md:flex-none">
                                    <Button variant="outline" className="w-full">
                                        التفاصيل
                                    </Button>
                                </Link>
                                <Button className="flex-1 md:flex-none">
                                    رابط الحصة
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (Hidden for demo) */}
                {/* <div className="text-center py-20">
          <div className="w-20 h-20 bg-secondary-2 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-1/40">
            <Calendar size={40} />
          </div>
          <h3 className="text-xl font-bold text-primary-1 mb-2">لا توجد حجوزات حالياً</h3>
          <p className="text-primary-1/60 mb-8">تصفح الجداول الدراسية واحجز حصتك القادمة</p>
          <Link href="/schedules">
            <Button>تصفح الحصص</Button>
          </Link>
        </div> */}
            </div>
        </div>
    );
}
