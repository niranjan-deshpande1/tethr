import { createClient } from '@supabase/supabase-js'

// Ensure 'waitlist' table exists in Supabase with columns:
// id uuid pk, email text unique, created_at timestamptz default now()
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
