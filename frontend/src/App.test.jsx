import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders the portfolio owner name', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /al afif abdurrahman/i })).toBeInTheDocument()
})

test('switches between professional and casual modes', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByText(/ai\/ml developer/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByText(/community builder/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /switch to professional mode/i })).toBeInTheDocument()
})

test('renders every PRD section', () => {
  render(<App />)

  for (const name of ['About', 'Skills', 'Projects', 'Experience', 'Organization', 'Certificates', 'Contact']) {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument()
  }
})
