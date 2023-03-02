import type { FunctionComponent } from 'react'

import UITypography from './ui-typography'
import styles from './ui-button.module.css'

type Props = {
  children: string
  onClick: () => void
}

const UIButton: FunctionComponent<Props> = (props) => {
  return (
    <button className={styles.uiButton} onClick={props.onClick}>
      <UITypography variant="button">{props.children}</UITypography>
    </button>
  )
}

export default UIButton
