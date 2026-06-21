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

  expect(screen.getAllByText(/pengembang ai\/ml/i)).not.toHaveLength(0)
  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getAllByText(/penggerak organisasi/i)).not.toHaveLength(0)
  expect(screen.getByRole('button', { name: /alih ke mode profesional/i })).toBeInTheDocument()
})

test('renders every PRD section', () => {
  render(<App />)

  for (const name of [
    'Profil',
    'Tech Stack',
    'Project IT',
    'Pengalaman IT',
    'Sertifikat',
    'Kontak',
  ]) {
    expect(screen.getByRole('heading', { name, level: 2 })).toBeInTheDocument()
  }
})

test('marks the app root with the active visual mode', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'professional')
  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'casual')
})

test('uses different portrait treatments for professional and casual modes', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByAltText(/potret profesional/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getByAltText(/potret casual/i)).toBeInTheDocument()
})

test('professional mode only shows IT content with specific GitHub repositories', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /project it/i })).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: /organisasi/i })).not.toBeInTheDocument()

  expect(screen.getByRole('link', { name: /rag chatbot desa/i })).toHaveAttribute(
    'href',
    'https://github.com/AlAfif19/RAGchatbot-desa.git',
  )
  expect(screen.getByRole('link', { name: /segmentasi pelanggan/i })).toHaveAttribute(
    'href',
    'https://github.com/AlAfif19/segmentasi__pelanggan.git',
  )
  expect(screen.getAllByAltText(/pratinjau dashboard/i)).toHaveLength(2)
})

test('casual mode only shows organization and non-IT content', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))

  expect(screen.getByRole('heading', { name: /organisasi/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /galeri/i })).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: /project it/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: /tech stack/i })).not.toBeInTheDocument()
})

test('gallery carousel advances through organization moments in casual mode', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getByRole('heading', { name: /panggung kepemimpinan/i })).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /item galeri berikutnya/i }))
  expect(screen.getByRole('heading', { name: /tim organisasi/i })).toBeInTheDocument()
})

test('renders decorative floating 3d assets behind the portfolio', () => {
  render(<App />)

  expect(screen.getByTestId('floating-3d-assets')).toBeInTheDocument()
})

test('CV and certificate assets are directly downloadable', () => {
  render(<App />)

  const [cvLink] = screen.getAllByRole('link', { name: /unduh cv/i })
  expect(cvLink).toHaveAttribute('download')
  expect(cvLink).toHaveAttribute('href', expect.stringContaining('CV_Afif_2026.docx'))

  expect(screen.getAllByAltText(/sertifikat/i)).not.toHaveLength(0)
  expect(screen.getAllByRole('link', { name: /unduh sertifikat/i })[0]).toHaveAttribute('download')
})

test('professional mode includes complete core CV data', () => {
  render(<App />)

  expect(screen.getByText(/it support intern/i)).toBeInTheDocument()
  expect(screen.getByText(/bagian pelayanan dan operator/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /pendidikan/i })).toBeInTheDocument()
  expect(screen.getByText(/ipk 3,90/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /project software quality assurance/i })).toBeInTheDocument()
})

test('casual mode includes organization, speaker, and performer history', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getAllByText(/ketua komisi i bidang legislasi/i)).not.toHaveLength(0)
  expect(screen.getAllByText(/speaker.*voyage of discovery/i)).not.toHaveLength(0)
  expect(screen.getAllByText(/performer artist/i)).not.toHaveLength(0)
})

test('hero uses the selected portrait as a full background', () => {
  render(<App />)

  expect(screen.getByTestId('hero-background')).toContainElement(
    screen.getByAltText(/potret profesional/i),
  )
})

test('professional education provides a transcript download', () => {
  render(<App />)

  const transcriptLink = screen.getByRole('link', { name: /unduh transkrip nilai/i })
  expect(transcriptLink).toHaveAttribute('download')
  expect(transcriptLink).toHaveAttribute('href', expect.stringContaining('Transkrip_Nilai.png'))
})

test('renders an expanded set of floating 3d assets', () => {
  render(<App />)

  expect(screen.getByTestId('floating-3d-assets').children).toHaveLength(8)
})
