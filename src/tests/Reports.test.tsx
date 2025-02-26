import React from 'react'
import { render, screen } from '@testing-library/react'
import Reports from '../pages/Reports'

test('renders reports page', () => {
  render(<Reports />)
  const reportsHeading = screen.getByText(/Reports/i)

  expect(reportsHeading).toBeInTheDocument()
})
