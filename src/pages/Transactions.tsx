import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([])

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
      if (error) {
        console.error('Error fetching transactions:', error.message)
      } else {
        setTransactions(data)
      }
    }
    fetchTransactions()
  }, [])

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions
