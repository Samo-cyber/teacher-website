"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/ui/BookingModal";
import { Calendar, Clock, Users, BookOpen, CheckCircle, Share2, Star } from "lucide-react";
import { useParams } from "next/navigation";

export default function ClassDetailsPage() {
    const params = useParams();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    // Static data for demo
    const classData = {
        title: "مقدمة في المنطق الرمزي",
        description: "شرح تفصيلي للمفاهيم الأساسية في المنطق الرمزي، وكيفية تحويل القضايا اللفظية إلى صيغ رمزية، مع حل أسئلة وتدريبات عملية من امتحانات السنوات السابقة.",
        grade: "الصف الثالث الثانوي",
        date: "الجمعة، 15 نوفمبر 2024",
        time: "04:00 م - 06:00 م",
        price: "50 ج.م",
        instructor: "أحمد صلاح",
        features: [
            "شرح مبسط وشامل",
            "مذكرة PDF مجانية",
            "حل أسئلة الامتحانات",
            "متابعة بعد الحصة",
        ],
    };

    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Image */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/svg/card-640x360.svg"
                                alt={classData.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 right-4 bg-accent text-primary-1 font-bold px-4 py-2 rounded-lg shadow-md">
                                {classData.grade}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-2 space-y-6">
                            <div className="flex items-start justify-between gap-4">
                                <h1 className="text-3xl font-bold text-primary-1">{classData.title}</h1>
                                <button className="p-2 text-primary-1/60 hover:text-primary-1 hover:bg-secondary-2 rounded-full transition-colors">
                                    <Share2 size={24} />
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-6 text-primary-1/70 border-b border-secondary-2 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={20} />
                                    <span>{classData.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={20} />
                                    <span>{classData.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={20} />
                                    <span>120 طالب مسجل</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-primary-1 flex items-center gap-2">
                                    <BookOpen size={24} />
                                    عن الحصة
                                </h3>
                                <p className="text-primary-1/80 leading-relaxed text-lg">
                                    {classData.description}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-primary-1 flex items-center gap-2">
                                    <Star size={24} />
                                    ماذا ستتعلم؟
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {classData.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-primary-1/80">
                                            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Booking Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-secondary-2 sticky top-24">
                            <div className="text-center mb-6">
                                <span className="text-primary-1/60 text-sm">سعر الحصة</span>
                                <div className="text-4xl font-bold text-primary-1 mt-1">{classData.price}</div>
                            </div>

                            <Button
                                className="w-full mb-4 py-6 text-lg"
                                onClick={() => setIsBookingModalOpen(true)}
                            >
                                حجز مقعد الآن
                            </Button>

                            <p className="text-center text-xs text-primary-1/60 mb-6">
                                ضمان استرداد المبلغ في حال إلغاء الحصة قبل 24 ساعة
                            </p>

                            <div className="border-t border-secondary-2 pt-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-secondary-2 flex items-center justify-center overflow-hidden">
                                        <Image src="/svg/avatar-120x120.svg" alt="Instructor" width={48} height={48} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-primary-1/60">المحاضر</div>
                                        <div className="font-bold text-primary-1">{classData.instructor}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                classTitle={classData.title}
                classDate={classData.date}
                classTime={classData.time}
            />
        </div>
    );
}
