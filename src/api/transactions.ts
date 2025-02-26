import { supabase } from '../supabaseClient'

export const getTransactions = async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
  if (error) {
    console.error('Error fetching transactions:', error.message)
  }
  return { data, error }
}

export const updateTransaction = async (transactionId: string, transactionData: any) => {
  const { data, error } = await supabase
    .from('transactions')
    .update(transactionData)
    .eq('id', transactionId)
  if (error) {
    console.error('Error updating transaction:', error.message)
  }
  return { data, error }
}
