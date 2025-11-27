"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith("/auth");

    return (
        <AuthProvider>
            {!isAuthPage && <Header />}
            <main className="flex-grow">{children}</main>
            {!isAuthPage && <Footer />}
        </AuthProvider>
    );
}
