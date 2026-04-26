import { createClient } from '@supabase/supabase-js'

// Ensure 'waitlist' table exists in Supabase with columns:
// id uuid pk, email text unique, created_at timestamptz default now()
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = url && key && !url.includes('placeholder')
  ? createClient(url, key)
  : null
