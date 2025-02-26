import React from 'react'
import { render, screen } from '@testing-library/react'
import Accounts from '../pages/Accounts'

test('renders accounts page', () => {
  render(<Accounts />)
  const accountsHeading = screen.getByText(/Accounts/i)

  expect(accountsHeading).toBeInTheDocument()
})
