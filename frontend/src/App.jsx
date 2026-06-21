import { useState } from 'react'
import { portfolio } from './data/portfolio'

export default function App() {
  const [mode, setMode] = useState('professional')
  const copy = portfolio.modeCopy[mode]
  const nextMode = mode === 'professional' ? 'casual' : 'professional'

  return (
    <main>
      <p>{copy.role}</p>
      <h1>{portfolio.profile.name}</h1>
      <p>{copy.summary}</p>
      <button type="button" onClick={() => setMode(nextMode)}>
        {copy.switchLabel}
      </button>
    </main>
  )
}
