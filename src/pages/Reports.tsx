import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Line } from 'react-chartjs-2'

const Reports: React.FC = () => {
  const [spendingData, setSpendingData] = useState<any>(null)

  useEffect(() => {
    const fetchSpendingData = async () => {
      const { data, error } = await supabase
        .from('reports')
        .select('*')
      if (error) {
        console.error('Error fetching spending data:', error.message)
      } else {
        setSpendingData(data)
      }
    }
    fetchSpendingData()
  }, [])

  const chartData = {
    labels: spendingData ? spendingData.map((item: any) => item.date) : [],
    datasets: [
      {
        label: 'Spending',
        data: spendingData ? spendingData.map((item: any) => item.amount) : [],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  return (
    <div>
      <h1>Reports</h1>
      {spendingData ? (
        <Line data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Reports
