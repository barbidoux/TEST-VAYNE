import React from 'react'
import { render, screen } from '@testing-library/react'
import Budgets from '../pages/Budgets'

test('renders budgets page', () => {
  render(<Budgets />)
  const budgetsHeading = screen.getByText(/Budgets/i)

  expect(budgetsHeading).toBeInTheDocument()
})
