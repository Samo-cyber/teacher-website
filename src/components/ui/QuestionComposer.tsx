"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function QuestionComposer() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log({ subject, content });
        setSubject("");
        setContent("");
        alert("تم إرسال سؤالك بنجاح!");
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-2 p-6">
            <h3 className="text-xl font-bold text-primary-1 mb-4">اطرح سؤالاً جديداً</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-1/80 mb-1">
                        موضوع السؤال
                    </label>
                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="مثال: استفسار عن درس الفلسفة الوجودية"
                        className="w-full px-4 py-2 rounded-lg border border-secondary-3 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/20 outline-none transition-all"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-primary-1/80 mb-1">
                        تفاصيل السؤال
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="اكتب سؤالك هنا بالتفصيل..."
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-secondary-3 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/20 outline-none transition-all resize-none"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <Button type="submit" className="gap-2">
                        <span>إرسال السؤال</span>
                        <Send size={18} />
                    </Button>
                </div>
            </form>
        </div>
    );
}
