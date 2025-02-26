import { supabase } from '../supabaseClient'

export const linkAccount = async (accountData: any) => {
  const { data, error } = await supabase
    .from('accounts')
    .insert([accountData])
  if (error) {
    console.error('Error linking account:', error.message)
  }
  return { data, error }
}
