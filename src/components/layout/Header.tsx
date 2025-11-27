"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/schedules", label: "الجداول" },
    { href: "/questions", label: "الأسئلة" },
    { href: "/my-bookings", label: "حجوزاتي" },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-secondary-1/80 backdrop-blur-md border-b border-secondary-2">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-lg font-medium transition-colors duration-200 hover:text-primary-2",
                                pathname === link.href ? "text-primary-1 font-bold" : "text-primary-1/70"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Brand Name (Text Only - No Logo) */}
                <div className="text-xl font-bold text-primary-1 hidden md:block">
                    أحمد صلاح
                </div>

                {/* User / Auth Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/profile"
                        className="p-2 rounded-full bg-secondary-2 text-primary-1 hover:bg-secondary-3 transition-colors"
                    >
                        <User size={24} />
                    </Link>
                    <Link
                        href="/auth/login"
                        className="hidden md:inline-flex px-6 py-2 bg-primary-1 text-white rounded-md font-medium hover:bg-primary-2 transition-colors duration-200"
                    >
                        تسجيل الدخول
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-secondary-1 border-b border-secondary-2 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-lg font-medium p-2 rounded-md hover:bg-secondary-2 transition-colors",
                                pathname === link.href ? "text-primary-1 font-bold bg-secondary-2" : "text-primary-1/70"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/auth/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-center px-6 py-3 bg-primary-1 text-white rounded-md font-medium hover:bg-primary-2 transition-colors"
                    >
                        تسجيل الدخول
                    </Link>
                </div>
            )}
        </header>
    );
}
