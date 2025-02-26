import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Login from '../pages/Login'

test('renders login form', () => {
  render(<Login />)
  const emailInput = screen.getByPlaceholderText(/Email/i)
  const passwordInput = screen.getByPlaceholderText(/Password/i)
  const loginButton = screen.getByText(/Login/i)

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(loginButton).toBeInTheDocument()
})

test('handles login', () => {
  render(<Login />)
  const emailInput = screen.getByPlaceholderText(/Email/i)
  const passwordInput = screen.getByPlaceholderText(/Password/i)
  const loginButton = screen.getByText(/Login/i)

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })
  fireEvent.click(loginButton)

  // Add assertions for login handling
})
