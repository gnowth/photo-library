import { screen } from '@testing-library/react'

import { renderWithProviders, server } from '../test.utils'
import PageLanding from './page-landing'

describe('PageLanding', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('contains an h1', () => {
    renderWithProviders(<PageLanding />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
