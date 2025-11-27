import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Users } from "lucide-react";

interface ClassCardProps {
    id: string;
    title: string;
    description: string;
    grade: string;
    date: string;
    time: string;
    studentsCount?: number;
    imageSrc?: string;
}

export function ClassCard({ id, title, description, grade, date, time, studentsCount = 0, imageSrc = "/svg/card-640x360.svg" }: ClassCardProps) {
    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-secondary-2 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-36 md:h-44 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-accent text-primary-1 text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    {grade}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-primary-1 line-clamp-1 group-hover:text-primary-2 transition-colors">
                    {title}
                </h3>
                <p className="text-primary-1/70 text-xs md:text-sm line-clamp-2 h-8 md:h-10">
                    {description}
                </p>

                {/* Details */}
                <div className="flex items-center justify-between text-xs md:text-sm text-primary-1/60 pt-2 border-t border-secondary-2">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{time}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 text-xs md:text-sm text-primary-1/60">
                        <Users size={14} />
                        <span>{studentsCount} طالب</span>
                    </div>
                    <Link href={`/class/${id}`} className="flex-1">
                        <Button className="w-full text-sm" size="sm">
                            حجز الحصة
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
