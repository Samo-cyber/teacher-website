"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Send } from "lucide-react";

export function TeacherReplyPanel() {
    const [reply, setReply] = useState("");

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-2 p-6">
            <div className="flex items-center gap-2 mb-4 text-primary-1">
                <MessageSquare size={20} />
                <h3 className="font-bold text-lg">الرد على السؤال</h3>
            </div>

            <div className="space-y-4">
                <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="اكتب الرد هنا..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-secondary-3 focus:border-primary-2 focus:ring-2 focus:ring-primary-2/20 outline-none transition-all resize-none"
                />
                <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">
                        تجاهل
                    </Button>
                    <Button size="sm" className="gap-2">
                        <span>إرسال الرد</span>
                        <Send size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
