import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Budgets: React.FC = () => {
  const [budgets, setBudgets] = useState<any[]>([])

  useEffect(() => {
    const fetchBudgets = async () => {
      const { data, error } = await supabase
        .from('budgets')
        .select('*')
      if (error) {
        console.error('Error fetching budgets:', error.message)
      } else {
        setBudgets(data)
      }
    }
    fetchBudgets()
  }, [])

  return (
    <div>
      <h1>Budgets</h1>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.category_id} - {budget.amount} - {budget.start_date} - {budget.end_date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Budgets
