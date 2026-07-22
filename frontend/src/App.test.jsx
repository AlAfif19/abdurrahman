import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
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

  expect(screen.getByRole('link', { name: /pelayanan desa/i })).toHaveAttribute(
    'href',
    'https://github.com/AlAfif19/RAGchatbot-desa.git',
  )
  expect(screen.getByRole('link', { name: /clustering customer/i })).toHaveAttribute(
    'href',
    'https://github.com/AlAfif19/segmentasi__pelanggan.git',
  )
  expect(screen.getAllByAltText(/pratinjau dashboard/i)).toHaveLength(4)
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

test('floating 3d artwork follows the selected portfolio persona', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByTestId('floating-3d-assets')).toHaveAttribute('data-mode', 'professional')
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-artwork', 'chip')
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-side', 'right')

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))

  expect(screen.getByTestId('floating-3d-assets')).toHaveAttribute('data-mode', 'casual')
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-artwork', 'paper')
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-side', 'left')
})

test('shows persona artwork only after the hero has passed', () => {
  let observerCallback
  const disconnect = vi.fn()

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        observerCallback = callback
      }

      observe() {}

      disconnect() {
        disconnect()
      }
    },
  )

  const { unmount } = render(<App />)
  const artwork = screen.getByTestId('persona-3d-artwork')

  expect(artwork).toHaveAttribute('data-visible', 'false')

  act(() => {
    observerCallback([{ isIntersecting: false, boundingClientRect: { bottom: -1 } }])
  })

  expect(artwork).toHaveAttribute('data-visible', 'true')
  unmount()
  expect(disconnect).toHaveBeenCalledOnce()
  vi.unstubAllGlobals()
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

  expect(screen.getByTestId('floating-3d-assets').querySelectorAll('.floating-asset')).toHaveLength(8)
})

test('professional hero follows the supplied target composition', () => {
  render(<App />)

  expect(screen.getByAltText(/hero profesional target/i)).toBeInTheDocument()
  expect(screen.getByText('Abdurrahman')).toHaveClass('hero-name-accent')
  expect(screen.getByText(/scroll untuk menjelajahi/i)).toBeInTheDocument()
})

test('uses the revised academic achievement wording', () => {
  render(<App />)

  expect(screen.getByText(/peraih nilai tertinggi mata kuliah artificial intelligence/i)).toBeInTheDocument()
})

test('toggle knob position matches the selected mode', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByTestId('mode-switch-knob')).toHaveAttribute('data-position', 'left')
  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getByTestId('mode-switch-knob')).toHaveAttribute('data-position', 'right')
})

test('casual mode uses a clear foreground portrait treatment', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))
  expect(screen.getByTestId('hero-background')).toHaveAttribute('data-variant', 'casual-panel')
})

test('navbar links trigger smooth scrolling', async () => {
  const user = userEvent.setup()
  const scrollIntoView = vi.fn()
  Element.prototype.scrollIntoView = scrollIntoView
  render(<App />)

  await user.click(screen.getByRole('link', { name: 'Tentang' }))
  expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
})
