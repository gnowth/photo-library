import { render, screen } from '@testing-library/react'
import PageRoot from './page-root'

describe('PageRoot', () => {
  function renderComponent() {
    return render(<PageRoot />)
  }

  it('contains an h1', () => {
    renderComponent()

    const content = screen.getByRole('heading', { level: 1 })
    expect(content).toBeInTheDocument()
  })
})
