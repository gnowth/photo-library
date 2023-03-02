import type { ComponentType, FunctionComponent, ReactNode } from 'react'
import classnames from 'classnames'

import styles from './ui-stack.module.css'

type Props = {
  // Note: only support native element, can be extended to support React component
  as?: string
  children: ReactNode
  className?: string
}

const UIStacks: FunctionComponent<Props> = (props) => {
  const Component = (props.as ?? 'div') as unknown as ComponentType<Props>

  return <Component className={classnames(props.className, styles.uiStack)}>{props.children}</Component>
}

export default UIStacks
