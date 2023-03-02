import type { FunctionComponent, ReactNode } from 'react'

import styles from './ui-row.module.css'

type Props = {
  children: ReactNode
}

const UIRow: FunctionComponent<Props> = (props) => {
  return <div className={styles.uiRow}>{props.children}</div>
}

export default UIRow
