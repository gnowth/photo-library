import type { ComponentType, FunctionComponent } from 'react'
import classnames from 'classnames'

import styles from './ui-button-icon.module.css'

type PropsIcon = {
  className?: string
}

type Props = {
  active: boolean
  Icon: ComponentType<PropsIcon>
  onClick: () => void
}

const UIButtonIcon: FunctionComponent<Props> = (props) => {
  return (
    <button className={styles.uiButtonIcon} onClick={props.onClick}>
      <props.Icon className={classnames(styles.icon, props.active && styles.active)} />
    </button>
  )
}

export default UIButtonIcon
