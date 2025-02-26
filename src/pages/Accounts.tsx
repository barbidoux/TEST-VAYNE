import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState<any[]>([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const { data, error } = await supabase
        .from('accounts')
        .select('*')
      if (error) {
        console.error('Error fetching accounts:', error.message)
      } else {
        setAccounts(data)
      }
    }
    fetchAccounts()
  }, [])

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - {account.balance}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accounts
