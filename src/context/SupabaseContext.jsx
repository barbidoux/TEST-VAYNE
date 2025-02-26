import React, { createContext, useContext } from 'react'
import { createClient } from '@supabase/supabase-js'

const SupabaseContext = createContext()

export const useSupabase = () => {
  return useContext(SupabaseContext)
}

export const SupabaseProvider = ({ children }) => {
  const supabase = createClient('https://your-supabase-url.supabase.co', 'your-supabase-anon-key')

  return <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>
}
