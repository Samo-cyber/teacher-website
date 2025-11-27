import { MessageCircle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Placeholder data
const QUESTIONS = [
    {
        id: 1,
        student: "محمد أحمد",
        subject: "سؤال في المنطق الرمزي",
        content: "هل يمكن شرح الفرق بين القضية الحملية والقضية الشرطية بمثال بسيط؟",
        date: "منذ ساعتين",
        status: "answered",
        answer: "أهلاً محمد. القضية الحملية هي التي نحكم فيها بثبوت شيء لشيء أو نفيه عنه بلا شرط، مثل: (الحديد معدن). أما الشرطية فهي التي نعلق فيها حكماً على حكم آخر، مثل: (إذا سخن الحديد تمدد).",
    },
    {
        id: 2,
        student: "سارة علي",
        subject: "استفسار عن موعد الحصة القادمة",
        content: "هل سيتم تأجيل حصة المراجعة النهائية للأسبوع القادم؟",
        date: "منذ 5 ساعات",
        status: "pending",
    },
    {
        id: 3,
        student: "عمر خالد",
        subject: "علم النفس النمو",
        content: "ما هي أهم خصائص مرحلة المراهقة المبكرة التي يجب التركيز عليها في الامتحان؟",
        date: "منذ يوم",
        status: "answered",
        answer: "أهلاً عمر. ركز على التغيرات الجسمية السريعة، والنمو العقلي (التفكير المجرد)، والسعي للاستقلال العاطفي عن الوالدين.",
    },
];

export function QuestionsList() {
    return (
        <div className="space-y-6">
            {QUESTIONS.map((q) => (
                <div key={q.id} className="bg-white rounded-xl shadow-sm border border-secondary-2 overflow-hidden">
                    {/* Question Header */}
                    <div className="p-6 border-b border-secondary-2/50">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary-2 flex items-center justify-center text-primary-1 font-bold">
                                    {q.student[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-1">{q.student}</h4>
                                    <p className="text-xs text-primary-1/60 flex items-center gap-1">
                                        <Clock size={12} />
                                        {q.date}
                                    </p>
                                </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${q.status === "answered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                }`}>
                                {q.status === "answered" ? (
                                    <>
                                        <CheckCircle size={12} />
                                        تمت الإجابة
                                    </>
                                ) : (
                                    <>
                                        <Clock size={12} />
                                        في الانتظار
                                    </>
                                )}
                            </div>
                        </div>
                        <h5 className="mt-4 font-bold text-lg text-primary-1">{q.subject}</h5>
                        <p className="mt-2 text-primary-1/80 leading-relaxed">{q.content}</p>
                    </div>

                    {/* Answer Section */}
                    {q.status === "answered" && (
                        <div className="bg-secondary-2/30 p-6 flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-primary-1 flex items-center justify-center text-white font-bold">
                                    أ
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-primary-1 flex items-center gap-2">
                                    رد المعلم
                                    <CheckCircle size={16} className="text-primary-2" />
                                </h4>
                                <p className="text-primary-1/80 leading-relaxed">{q.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
