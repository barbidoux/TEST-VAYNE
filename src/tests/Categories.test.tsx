import React from 'react'
import { render, screen } from '@testing-library/react'
import Categories from '../pages/Categories'

test('renders categories page', () => {
  render(<Categories />)
  const categoriesHeading = screen.getByText(/Categories/i)

  expect(categoriesHeading).toBeInTheDocument()
})
