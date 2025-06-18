import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ueoqhoocwoozohludugr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlb3Fob29jd29vem9obHVkdWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDcxNjEsImV4cCI6MjA2MjAyMzE2MX0.ZFCz3cS8rPKTR-wSenK_Wl_DZOHocWIs3-eHHTBZqBQ'  // NEVER use service_role key in frontend

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
