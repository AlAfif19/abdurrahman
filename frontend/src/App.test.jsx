import { act, render, screen, within } from '@testing-library/react'
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
  expect(screen.getAllByAltText(/pratinjau dashboard/i)).toHaveLength(6)
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

test('CV and certificate assets are directly downloadable', () => {
  render(<App />)

  const [cvLink] = screen.getAllByRole('link', { name: /unduh cv/i })
  expect(cvLink).toHaveAttribute('download')
  expect(cvLink).toHaveAttribute('href', expect.stringContaining('CV_Afif_2026.pdf'))

  expect(screen.getAllByAltText(/sertifikat/i)).not.toHaveLength(0)
  expect(screen.getAllByRole('link', { name: /unduh sertifikat/i })[0]).toHaveAttribute('download')
})

test('professional mode includes complete core CV data', () => {
  render(<App />)

  expect(screen.getByText(/it support intern/i)).toBeInTheDocument()
  expect(screen.getByText(/bagian pelayanan dan operator/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /pendidikan/i })).toBeInTheDocument()
  expect(screen.getByText(/ipk 3,91/i)).toBeInTheDocument()
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

test('professional education provides a transcript download', () => {
  render(<App />)

  const transcriptLink = screen.getByRole('link', { name: /unduh transkrip nilai/i })
  expect(transcriptLink).toHaveAttribute('download')
  expect(transcriptLink).toHaveAttribute('href', expect.stringContaining('Transkrip Nilai.pdf'))
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

test('navbar links trigger smooth scrolling', async () => {
  const user = userEvent.setup()
  const scrollIntoView = vi.fn()
  Element.prototype.scrollIntoView = scrollIntoView
  render(<App />)

  await user.click(screen.getByRole('link', { name: 'Tentang' }))
  expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
})

test('hero shows the professional cutout photo, then the casual one after toggling', async () => {
  const user = userEvent.setup()
  render(<App />)

  const hero = screen.getByTestId('hero-photo')
  expect(within(hero).getByAltText(/potret profesional/i)).toBeInTheDocument()
  expect(within(hero).getByAltText(/potret profesional/i)).toHaveAttribute(
    'src',
    expect.stringContaining('hero-professional-cutout'),
  )

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))

  expect(within(hero).getByAltText(/potret casual/i)).toHaveAttribute(
    'src',
    expect.stringContaining('hero-casual-cutout'),
  )
})

test('hero name keeps the accent class and the h1 structure', () => {
  render(<App />)

  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toHaveClass('hero-name')
  expect(screen.getByText('Al Afif')).toHaveClass('hero-name-line')
  expect(screen.getByText('Abdurrahman')).toHaveClass('hero-name-accent')
  expect(screen.getByText(/scroll untuk menjelajahi/i)).toBeInTheDocument()
})

test('hero follows the active mode copy and actions', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByText(/fresh graduate teknik informatika/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /lihat project it/i })).toHaveAttribute('href', '#projects')

  await user.click(screen.getByRole('button', { name: /alih ke mode casual/i }))

  expect(screen.getByText(/pengalaman memimpin organisasi/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /lihat galeri/i })).toHaveAttribute('href', '#gallery')
})

test('the old floating 3d artwork is gone', () => {
  render(<App />)

  expect(screen.queryByTestId('floating-3d-assets')).not.toBeInTheDocument()
  expect(screen.queryByTestId('persona-3d-artwork')).not.toBeInTheDocument()
})

test('every anchor id keeps existing for the professional mode', () => {
  const { container } = render(<App />)

  for (const id of ['top', 'about', 'skills', 'projects', 'experience', 'education', 'certificates', 'contact']) {
    expect(container.querySelector(`#${id}`)).not.toBeNull()
  }
})

test('every anchor id keeps existing for the casual mode', () => {
  const { container } = render(<App initialMode="casual" />)

  for (const id of ['top', 'about', 'organization', 'gallery', 'certificates', 'contact']) {
    expect(container.querySelector(`#${id}`)).not.toBeNull()
  }
})

test('mobile menu button toggles the navigation overlay', async () => {
  const user = userEvent.setup()
  render(<App />)

  const nav = screen.getByRole('navigation', { name: /navigasi utama/i })
  expect(nav).toHaveAttribute('data-open', 'false')

  await user.click(screen.getByRole('button', { name: /buka menu/i }))
  expect(nav).toHaveAttribute('data-open', 'true')
  expect(screen.getByRole('button', { name: /tutup menu/i })).toHaveAttribute('aria-expanded', 'true')

  await user.keyboard('{Escape}')
  expect(nav).toHaveAttribute('data-open', 'false')
})

test('navbar marks the section reported by the scroll spy as current', () => {
  let observerCallback
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        observerCallback = callback
      }

      observe() {}

      disconnect() {}
    },
  )

  render(<App />)
  expect(screen.getByRole('link', { name: 'Beranda' })).toHaveAttribute('aria-current', 'location')

  act(() => {
    observerCallback([{ isIntersecting: true, target: { id: 'projects' } }])
  })

  expect(screen.getByRole('link', { name: 'Project' })).toHaveAttribute('aria-current', 'location')
  expect(screen.getByRole('link', { name: 'Beranda' })).not.toHaveAttribute('aria-current')
  vi.unstubAllGlobals()
})

test('every skill group has a visible label', () => {
  render(<App />)

  const skills = document.querySelector('#skills')
  for (const label of ['Tech Stack', 'AI dan Data', 'Tools dan Workflow', 'Soft Skill', 'Bahasa']) {
    expect(within(skills).getByRole('heading', { name: label, level: 3 })).toBeInTheDocument()
  }
})
