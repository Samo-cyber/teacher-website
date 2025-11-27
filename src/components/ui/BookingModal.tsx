"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    classTitle: string;
    classDate: string;
    classTime: string;
}

export function BookingModal({ isOpen, onClose, classTitle, classDate, classTime }: BookingModalProps) {
    const [step, setStep] = useState<"confirm" | "success">("confirm");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            setStep("confirm");
        } else {
            setTimeout(() => setIsAnimating(false), 200);
        }
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    const handleConfirm = () => {
        // Simulate API call
        setTimeout(() => {
            setStep("success");
        }, 500);
    };

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary-1/50 backdrop-blur-sm transition-opacity duration-200",
                isOpen ? "opacity-100" : "opacity-0"
            )}
        >
            <div
                className={cn(
                    "bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-200",
                    isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                )}
            >
                {/* Header */}
                <div className="bg-secondary-2 p-4 flex items-center justify-between border-b border-secondary-3">
                    <h3 className="font-bold text-lg text-primary-1">تأكيد الحجز</h3>
                    <button onClick={onClose} className="text-primary-1/60 hover:text-primary-1 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {step === "confirm" ? (
                        <div className="space-y-6">
                            <div className="space-y-2 text-center">
                                <p className="text-primary-1/70">هل أنت متأكد من رغبتك في حجز الحصة التالية؟</p>
                                <h4 className="text-xl font-bold text-primary-1">{classTitle}</h4>
                                <div className="flex items-center justify-center gap-4 text-sm text-primary-1/60 bg-secondary-2/50 py-2 rounded-lg">
                                    <span>{classDate}</span>
                                    <span>•</span>
                                    <span>{classTime}</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button variant="secondary" className="flex-1" onClick={onClose}>
                                    إلغاء
                                </Button>
                                <Button className="flex-1" onClick={handleConfirm}>
                                    تأكيد الحجز
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 text-center py-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-primary-1">تم الحجز بنجاح!</h4>
                            <p className="text-primary-1/70">
                                تم تسجيل حجزك للحصة بنجاح. يمكنك مراجعة تفاصيل الحجز في صفحة "حجوزاتي".
                            </p>
                            <Button className="w-full" onClick={onClose}>
                                حسناً، فهمت
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
