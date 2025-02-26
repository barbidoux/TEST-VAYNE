import { supabase } from '../supabaseClient'

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
  if (error) {
    console.error('Error fetching categories:', error.message)
  }
  return { data, error }
}

export const createCategory = async (categoryData: any) => {
  const { data, error } = await supabase
    .from('categories')
    .insert([categoryData])
  if (error) {
    console.error('Error creating category:', error.message)
  }
  return { data, error }
}

export const updateCategory = async (categoryId: string, categoryData: any) => {
  const { data, error } = await supabase
    .from('categories')
    .update(categoryData)
    .eq('id', categoryId)
  if (error) {
    console.error('Error updating category:', error.message)
  }
  return { data, error }
}

export const deleteCategory = async (categoryId: string) => {
  const { data, error } = await supabase
    .from('categories')
    .delete()
    .eq('id', categoryId)
  if (error) {
    console.error('Error deleting category:', error.message)
  }
  return { data, error }
}
