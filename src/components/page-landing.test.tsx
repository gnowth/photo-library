import { render, screen } from '@testing-library/react'
import PageLanding from './page-landing'

describe('PageLanding', () => {
  function renderComponent() {
    return render(<PageLanding />)
  }

  it('contains an h1', () => {
    renderComponent()

    const content = screen.getByRole('heading', { level: 1 })
    expect(content).toBeInTheDocument()
  })
})
