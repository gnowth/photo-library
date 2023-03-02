import type { FunctionComponent, ReactNode } from 'react'

import styles from './ui-grid.module.css'

type Props = {
  children: ReactNode
}

const UIGrid: FunctionComponent<Props> = (props) => {
  return <div className={styles.uiGrid}>{props.children}</div>
}

export default UIGrid
