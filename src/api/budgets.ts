import { supabase } from '../supabaseClient'

export const getBudgets = async () => {
  const { data, error } = await supabase
    .from('budgets')
    .select('*')
  if (error) {
    console.error('Error fetching budgets:', error.message)
  }
  return { data, error }
}

export const createBudget = async (budgetData: any) => {
  const { data, error } = await supabase
    .from('budgets')
    .insert([budgetData])
  if (error) {
    console.error('Error creating budget:', error.message)
  }
  return { data, error }
}

export const updateBudget = async (budgetId: string, budgetData: any) => {
  const { data, error } = await supabase
    .from('budgets')
    .update(budgetData)
    .eq('id', budgetId)
  if (error) {
    console.error('Error updating budget:', error.message)
  }
  return { data, error }
}

export const deleteBudget = async (budgetId: string) => {
  const { data, error } = await supabase
    .from('budgets')
    .delete()
    .eq('id', budgetId)
  if (error) {
    console.error('Error deleting budget:', error.message)
  }
  return { data, error }
}
