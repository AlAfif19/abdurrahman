import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

test('renders the portfolio owner name', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /al afif abdurrahman/i })).toBeInTheDocument()
})
