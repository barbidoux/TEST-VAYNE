import React from 'react'
import { render, screen } from '@testing-library/react'
import Transactions from '../pages/Transactions'

test('renders transactions page', () => {
  render(<Transactions />)
  const transactionsHeading = screen.getByText(/Transactions/i)

  expect(transactionsHeading).toBeInTheDocument()
})
