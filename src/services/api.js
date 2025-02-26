import axios from 'axios'
import { useSupabase } from '../context/SupabaseContext'

const api = axios.create({
  baseURL: 'https://api.powens.com',
})

api.interceptors.request.use(
  async (config) => {
    const { supabase } = useSupabase()
    const session = supabase.auth.session()
    if (session) {
      config.headers.Authorization = `Bearer ${session.access_token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const getTransactions = async () => {
  try {
    const response = await api.get('/transactions')
    return response.data
  } catch (error) {
    console.error('Error fetching transactions:', error)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export const createCategory = async (categoryData) => {
  try {
    const response = await api.post('/categories', categoryData)
    return response.data
  } catch (error) {
    console.error('Error creating category:', error)
    throw error
  }
}

export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await api.put(`/categories/${categoryId}`, categoryData)
    return response.data
  } catch (error) {
    console.error('Error updating category:', error)
    throw error
  }
}

export const deleteCategory = async (categoryId) => {
  try {
    const response = await api.delete(`/categories/${categoryId}`)
    return response.data
  } catch (error) {
    console.error('Error deleting category:', error)
    throw error
  }
}
