import React from 'react'
import { render, screen } from '@testing-library/react'
import Profile from '../pages/Profile'

test('renders profile page', () => {
  render(<Profile />)
  const emailText = screen.getByText(/Email:/i)
  const nameText = screen.getByText(/Name:/i)
  const currencyText = screen.getByText(/Currency:/i)

  expect(emailText).toBeInTheDocument()
  expect(nameText).toBeInTheDocument()
  expect(currencyText).toBeInTheDocument()
})
