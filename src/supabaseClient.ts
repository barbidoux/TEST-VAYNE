import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqeyvnmysilsmzkbejyf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZXl2bm15c2lsc216a2JlanlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1ODQ0NzQsImV4cCI6MjA1NjE2MDQ3NH0.tOlX__wgrjD34SUL03zIwd7HY7kGFUASC7j2d30Ig48'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
