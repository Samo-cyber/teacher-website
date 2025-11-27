// src/app/api/auth/check-email/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // ضع هنا الـ SERVICE ROLE KEY في env (غير NEXT_PUBLIC)
);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const email = (body?.email ?? "").toString().trim().toLowerCase();
        if (!email) {
            return NextResponse.json({ error: "email is required" }, { status: 400 });
        }

        // نتحقق من وجود المستخدم داخل auth.users
        const { data, error } = await supabaseAdmin
            .from('auth.users')
            .select('id')
            .eq('email', email)
            .limit(1);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const exists = Array.isArray(data) && data.length > 0;
        return NextResponse.json({ exists });
    } catch (err: any) {
        return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
    }
}
