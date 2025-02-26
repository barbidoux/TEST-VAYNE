import { supabase } from '../supabaseClient'

export const registerUser = async (userData: any) => {
  const { data, error } = await supabase.auth.signUp(userData)
  if (error) {
    console.error('Error registering user:', error.message)
  }
  return { data, error }
}

export const loginUser = async (userData: any) => {
  const { data, error } = await supabase.auth.signInWithPassword(userData)
  if (error) {
    console.error('Error logging in user:', error.message)
  }
  return { data, error }
}

export const getUserProfile = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error('Error fetching user profile:', error.message)
  }
  return { data, error }
}

export const updateUserProfile = async (userData: any) => {
  const { data, error } = await supabase.auth.update(userData)
  if (error) {
    console.error('Error updating user profile:', error.message)
  }
  return { data, error }
}

export const deleteUser = async () => {
  const { data, error } = await supabase.auth.deleteUser()
  if (error) {
    console.error('Error deleting user:', error.message)
  }
  return { data, error }
}
