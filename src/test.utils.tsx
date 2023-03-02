import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import type { FunctionComponent, ReactElement, ReactNode } from 'react'
import { render } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from './store'
import { createStore } from './store'
import handlersServicePhoto from './services/service-photo.handlers'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

type PropsWrapper = {
  children: ReactNode
}

export const server = setupServer(...handlersServicePhoto)

export function renderWithProviders(ui: ReactElement, options: ExtendedRenderOptions = {}) {
  const { preloadedState = {}, store = createStore({ preloadedState }), ...renderOptions } = options

  const Wrapper: FunctionComponent<PropsWrapper> = (props) => {
    return <Provider store={store}>{props.children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
