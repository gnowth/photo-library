import type { FunctionComponent } from 'react'
import classnames from 'classnames'

import styles from './ui-typography.module.css'

type Props = {
  className?: string
  children: string
  variant?: 'body' | 'bodyEmphasis' | 'caption' | 'heading1' | 'heading2' | 'label' | 'tab' | 'button'
}

const variantElement = {
  heading1: 'h1',
  heading2: 'h2',
}

const UITypography: FunctionComponent<Props> = (props) => {
  const Element = variantElement[props.variant] ?? 'p'

  return (
    <Element className={classnames(props.className, props.variant && styles[props.variant])}>
      {props.children}
    </Element>
  )
}

export default UITypography
