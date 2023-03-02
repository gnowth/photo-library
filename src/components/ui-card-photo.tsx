import type { FunctionComponent } from 'react'
import classnames from 'classnames'

import type { Photo } from '../services/service-photo'
import IconHeart from '../icons/icon-heart'
import UIButtonIcon from './ui-button-icon'
import UITypography from './ui-typography'
import styles from './ui-card-photo.module.css'

type Props = {
  active?: boolean
  className?: string
  onClick?: (photo: Photo) => void
  onFavorite?: (photo: Photo) => void
  value: Photo
}

const UICardPhoto: FunctionComponent<Props> = (props) => {
  return (
    <div
      className={classnames(props.className, styles.uiCardPhoto)}
      onClick={() => props.onClick?.(props.value)}
    >
      <img
        alt={props.value.description}
        className={classnames(styles.image, props.active && styles.active)}
        src={props.value.url}
      />

      <div className={styles.detail}>
        <UITypography className={styles.text} variant="bodyEmphasis">
          {props.value.filename}
        </UITypography>

        {props.onFavorite && (
          <UIButtonIcon
            active={props.value.favorited}
            onClick={() => props.onFavorite(props.value)}
            Icon={IconHeart}
          />
        )}
      </div>

      <UITypography className={styles.caption} variant="caption">
        {props.value.sizeText}
      </UITypography>
    </div>
  )
}

export default UICardPhoto
