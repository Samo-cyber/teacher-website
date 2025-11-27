import { QuestionComposer } from "@/components/ui/QuestionComposer";
import { QuestionsList } from "@/components/ui/QuestionsList";

export default function QuestionsPage() {
    return (
        <div className="min-h-screen bg-secondary-2/30 py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-primary-1">بنك الأسئلة</h1>
                        <p className="text-primary-1/70">
                            اسأل المعلم واحصل على إجابات دقيقة، أو تصفح أسئلة زملائك للاستفادة.
                        </p>
                    </div>

                    <QuestionComposer />

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary-1 border-b border-secondary-3 pb-4">
                            أحدث الأسئلة
                        </h2>
                        <QuestionsList />
                    </div>
                </div>
            </div>
        </div>
    );
}
