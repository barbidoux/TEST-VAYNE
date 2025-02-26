import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Register from '../pages/Register'

test('renders register form', () => {
  render(<Register />)
  const emailInput = screen.getByPlaceholderText(/Email/i)
  const passwordInput = screen.getByPlaceholderText(/Password/i)
  const registerButton = screen.getByText(/Register/i)

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(registerButton).toBeInTheDocument()
})

test('handles registration', () => {
  render(<Register />)
  const emailInput = screen.getByPlaceholderText(/Email/i)
  const passwordInput = screen.getByPlaceholderText(/Password/i)
  const registerButton = screen.getByText(/Register/i)

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })
  fireEvent.click(registerButton)

  // Add assertions for registration handling
})
