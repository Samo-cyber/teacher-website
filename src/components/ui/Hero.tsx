import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, BookOpen, Brain, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full py-6 md:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-secondary-1 via-white to-secondary-2/20">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-2/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-5 text-center lg:text-right order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary-2/10 text-primary-2 px-4 py-2 rounded-full text-sm font-medium">
                            <Award size={16} />
                            <span>خبرة تعليمية متميزة</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-1">
                            رحلة التفوق تبدأ من
                            <br />
                            <span className="text-primary-2">الفهم العميق</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-1/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            مع <span className="font-bold text-primary-1">الأستاذ أحمد صلاح</span>، اكتشف عالم الفلسفة وعلم النفس بطريقة مبتكرة تحول الدراسة إلى متعة والحفظ إلى فهم حقيقي
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-primary-2/10 rounded-lg flex items-center justify-center">
                                    <BookOpen className="text-primary-2" size={24} />
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary-1">500+</p>
                                    <p className="text-sm text-primary-1/60">طالب متفوق</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <Brain className="text-accent" size={24} />
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary-1">10+</p>
                                    <p className="text-sm text-primary-1/60">سنوات خبرة</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link href="/schedules">
                                <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg hover:shadow-xl transition-all">
                                    <span>ابدأ رحلتك الآن</span>
                                    <ArrowLeft size={20} />
                                </Button>
                            </Link>
                            <Link href="/auth/signup">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-primary-1 hover:text-white transition-all">
                                    تصفح الحصص المجانية
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
                            {/* Main Image Container */}
                            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-1/30 via-transparent to-transparent z-10"></div>

                                {/* Image */}
                                <Image
                                    src="/hero-main.jpg"
                                    alt="الأستاذ أحمد صلاح - مدرس الفلسفة وعلم النفس"
                                    fill
                                    className="object-contain"
                                    priority
                                />

                                {/* Floating Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-2 to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xl font-bold">أ</span>
                                        </div>
                                        <div className="text-right flex-1">
                                            <p className="font-bold text-primary-1">أحمد صلاح</p>
                                            <p className="text-sm text-primary-1/60">مدرس فلسفة وعلم نفس</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500">★</span>
                                            <span className="font-bold text-primary-1">4.9</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-2/20 rounded-2xl -z-10 rotate-12"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10 -rotate-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
