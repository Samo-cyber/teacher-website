import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full py-8 md:py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-right">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-1">
                            اكتشف عمق <span className="text-primary-2">الفلسفة</span>
                            <br />
                            وأسرار <span className="text-accent">علم النفس</span>
                        </h1>
                        <p className="text-base md:text-lg text-primary-1/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            مع الأستاذ أحمد صلاح، ننتقل بك من الحفظ إلى الفهم العميق، ومن الدراسة التقليدية إلى رحلة فكرية ممتعة تؤهلك للتفوق.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                            <Link href="/schedules">
                                <Button size="md" className="w-full sm:w-auto gap-2">
                                    تصفح الحصص
                                    <ArrowLeft size={18} />
                                </Button>
                            </Link>
                            <Link href="/auth/signup">
                                <Button variant="outline" size="md" className="w-full sm:w-auto">
                                    انضم إلينا الآن
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-none">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full">
                            <div className="absolute inset-0 bg-accent/10 rounded-2xl md:rounded-3xl transform rotate-2 translate-x-2 translate-y-2 md:rotate-3 md:translate-x-4 md:translate-y-4 -z-10" />
                            <Image
                                src="/hero-main.jpg"
                                alt="Ahmed Salah Hero"
                                fill
                                className="object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
