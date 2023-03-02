'use client'

import type { FunctionComponent, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'
import '../styles.css'

type Props = {
  children: ReactNode
}

const LayoutRoot: FunctionComponent<Props> = (props) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{props.children}</Provider>
      </body>
    </html>
  )
}

export default LayoutRoot
