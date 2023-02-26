import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import PageLanding from './page-landing'

const Template = (args) => <PageLanding {...args} />

export const Unauthenticated = Template.bind({})
Unauthenticated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const heading = canvas.getByRole('heading', { level: 1 })
  expect(heading).toBeInTheDocument()
}

const configs = {
  title: 'Page/Landing',
  component: PageLanding,
}

export default configs
