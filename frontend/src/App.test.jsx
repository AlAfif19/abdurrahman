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

  for (const name of [
    'About',
    'Skills',
    'Projects',
    'Gallery',
    'Experience',
    'Organization',
    'Certificates',
    'Contact',
  ]) {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument()
  }
})

test('marks the app root with the active visual mode', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'professional')
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'casual')
})

test('uses different portrait treatments for professional and casual modes', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByAltText(/professional portrait/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByAltText(/casual performance portrait/i)).toBeInTheDocument()
})

test('project cards link directly to GitHub', () => {
  render(<App />)

  const projectLink = screen.getByRole('link', { name: /rag chatbot desa/i })
  expect(projectLink).toHaveAttribute('href', expect.stringContaining('github.com/AlAfif19'))
})

test('gallery carousel advances through portfolio moments', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByRole('heading', { name: /leadership stage/i })).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /next gallery item/i }))
  expect(screen.getByRole('heading', { name: /organization team/i })).toBeInTheDocument()
})

test('renders decorative floating 3d assets behind the portfolio', () => {
  render(<App />)

  expect(screen.getByTestId('floating-3d-assets')).toBeInTheDocument()
})
