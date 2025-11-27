// src/lib/supabase/browserClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("MISSING SUPABASE ENV VARS", { supabaseUrl, supabaseAnonKey });
  // still create client to avoid crashes in dev (but will error on calls)
}

const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

export default supabase;
