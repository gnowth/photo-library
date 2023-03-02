import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Provider } from 'react-redux'
import { createStore } from '../store'

import PageLanding from './page-landing'

const store = createStore()

const Template = (args) => (
  <Provider store={store}>
    <PageLanding {...args} />
  </Provider>
)

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
