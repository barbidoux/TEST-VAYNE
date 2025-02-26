import { supabase } from '../supabaseClient'

export const getSpendingData = async () => {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
  if (error) {
    console.error('Error fetching spending data:', error.message)
  }
  return { data, error }
}
