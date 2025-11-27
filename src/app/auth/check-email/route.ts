// src/app/api/auth/check-email/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const email = (body?.email ?? "").toString().trim().toLowerCase();
        if (!email) {
            return NextResponse.json({ error: "email is required" }, { status: 400 });
        }

        // === طريقة آمنة: استخدام Admin API لاسترجاع المستخدمين ثم البحث بالإيميل ===
        // ملاحظة: listUsers قد يحتاج paging إذا عندك آلاف المستخدمين.
        const { data, error } = await supabaseAdmin.auth.admin.listUsers();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // ابحث عن الإيميل (مقارنة case-insensitive)
        const exists = Array.isArray(data?.users)
            ? data.users.some(u => (u.email ?? "").toString().trim().toLowerCase() === email)
            : false;

        return NextResponse.json({ exists });
    } catch (err: any) {
        return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
    }
}
