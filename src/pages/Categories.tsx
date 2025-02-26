import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
      if (error) {
        console.error('Error fetching categories:', error.message)
      } else {
        setCategories(data)
      }
    }
    fetchCategories()
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
