import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSupabase } from './SupabaseContext'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { supabase } = useSupabase()

  useEffect(() => {
    const session = supabase.auth.session()
    setUser(session?.user ?? null)

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [supabase])

  const login = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    setUser(user)
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
