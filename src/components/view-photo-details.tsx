'use client'

import type { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { formatDate } from './view-photo-details.utils'
import { useFavoritePhotoMutation, useDeletePhotoMutation } from '../services/service-photo'
import { selectPhotoSelected, photoSelect } from './view-photo-gallery.state'
import UIButton from './ui-button'
import UICardPhoto from './ui-card-photo'
import UIStack from './ui-stack'
import UIRow from './ui-row'
import UITypography from './ui-typography'
import styles from './view-photo-details.module.css'

const ViewPhotoDetails: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [favoritePhoto] = useFavoritePhotoMutation()
  const [deletePhoto] = useDeletePhotoMutation()
  const photoSelected = useSelector(selectPhotoSelected)

  if (!photoSelected) {
    return <div className={styles.viewPhotoDetails} />
  }

  return (
    <UIStack className={styles.viewPhotoDetails}>
      <section>
        <UICardPhoto
          onFavorite={() => {
            const newPhoto = { ...photoSelected, favorited: !photoSelected.favorited }
            dispatch(photoSelect(newPhoto))
            favoritePhoto(newPhoto)
          }}
          value={photoSelected}
        />
      </section>

      <section>
        <UIRow>
          <UITypography variant="heading2">Information</UITypography>
        </UIRow>

        <UIRow>
          <UITypography variant="label">Uploaded by</UITypography>

          <UITypography variant="bodyEmphasis">{photoSelected.uploadedBy}</UITypography>
        </UIRow>

        <UIRow>
          <UITypography variant="label">Created</UITypography>

          <UITypography variant="bodyEmphasis">{formatDate(photoSelected.createdAt)}</UITypography>
        </UIRow>

        <UIRow>
          <UITypography variant="label">Last modified</UITypography>

          <UITypography variant="bodyEmphasis">{formatDate(photoSelected.updatedAt)}</UITypography>
        </UIRow>

        <UIRow>
          <UITypography variant="label">Dimensions</UITypography>

          <UITypography variant="bodyEmphasis">{photoSelected.dimensions}</UITypography>
        </UIRow>

        <UIRow>
          <UITypography variant="label">Resolution</UITypography>

          <UITypography variant="bodyEmphasis">{photoSelected.resolution}</UITypography>
        </UIRow>
      </section>

      <section>
        <UITypography variant="heading2">Description</UITypography>

        <UITypography className={styles.description} variant="body">
          {photoSelected.description}
        </UITypography>
      </section>

      <section>
        <UIButton onClick={() => deletePhoto(photoSelected)}>Delete</UIButton>
      </section>
    </UIStack>
  )
}

export default ViewPhotoDetails
