import type { FunctionComponent } from 'react'
import classnames from 'classnames'

import UITypography from './ui-typography'
import styles from './ui-tabs.module.css'

export type Tab = {
  id: string
  label: string
}

type Props = {
  onChange?: (value: Tab) => void
  options: Tab[]
  value: Tab
}

const UITabs: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.uiTabs}>
      {props.options.map((option) => (
        <div
          className={classnames(styles.tab, option.id === props.value.id && styles.active)}
          key={option.id}
          onClick={() => props.onChange?.(option)}
        >
          <UITypography variant="tab">{option.label}</UITypography>
        </div>
      ))}
    </div>
  )
}

export default UITabs
