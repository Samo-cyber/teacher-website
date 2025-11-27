import { Hero } from "@/components/ui/Hero";
import { ClassCard } from "@/components/ui/ClassCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Star, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-12 md:pb-20">
      <Hero />

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-1">لماذا تختار منصتنا؟</h2>
          <p className="text-sm md:text-base text-primary-1/70 max-w-2xl mx-auto">
            نقدم تجربة تعليمية متكاملة تجمع بين الشرح المبسط والعمق الأكاديمي، مع متابعة مستمرة لمستواك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: <BookOpen size={28} />,
              title: "محتوى شامل",
              description: "شرح وافٍ لجميع أجزاء المنهج مع أمثلة تطبيقية من الواقع.",
            },
            {
              icon: <Star size={28} />,
              title: "متابعة دورية",
              description: "امتحانات دورية وتقييم مستمر لمستوى الطالب لضمان التفوق.",
            },
            {
              icon: <Award size={28} />,
              title: "تميز أكاديمي",
              description: "نساعدك على فهم الفلسفة وعلم النفس بعمق وليس مجرد الحفظ.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-secondary-2 shadow-sm hover:shadow-md transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-secondary-2 rounded-full flex items-center justify-center text-primary-1 group-hover:bg-primary-1 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-1">{feature.title}</h3>
              <p className="text-sm md:text-base text-primary-1/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Classes Section */}
      <section className="bg-secondary-2/30 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-1 mb-1 md:mb-2">أحدث الحصص</h2>
              <p className="text-sm md:text-base text-primary-1/70">تصفح أحدث الدروس المضافة للمنصة</p>
            </div>
            <Link href="/schedules">
              <Button variant="outline" className="gap-2 text-sm md:text-base">
                عرض الكل
                <ArrowLeft size={14} className="md:hidden" />
                <ArrowLeft size={16} className="hidden md:block" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ClassCard
              id="class-1"
              title="مقدمة في المنطق الرمزي"
              description="شرح تفصيلي للمفاهيم الأساسية مع حل أسئلة وتدريبات عملية من امتحانات سابقة."
              grade="الصف الثالث الثانوي"
              date="الجمعة، 15 نوفمبر"
              time="04:00 م"
              studentsCount={120}
              imageSrc="/card-logic.png"
            />
            <ClassCard
              id="class-2"
              title="علم النفس النمو: المراهقة"
              description="شرح تفصيلي للمفاهيم الأساسية مع حل أسئلة وتدريبات عملية من امتحانات سابقة."
              grade="الصف الثالث الثانوي"
              date="الجمعة، 15 نوفمبر"
              time="04:00 م"
              studentsCount={130}
              imageSrc="/card-psychology.png"
            />
            <ClassCard
              id="class-3"
              title="الفلسفة الوجودية وسارتر"
              description="شرح تفصيلي للمفاهيم الأساسية مع حل أسئلة وتدريبات عملية من امتحانات سابقة."
              grade="الصف الثالث الثانوي"
              date="الجمعة، 15 نوفمبر"
              time="04:00 م"
              studentsCount={140}
              imageSrc="/card-existentialism.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
