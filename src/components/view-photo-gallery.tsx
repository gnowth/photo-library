'use client'

import type { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useGetPhotosQuery } from '../services/service-photo'
import {
  photoDeselect,
  photoSelect,
  selectPhotoSelected,
  selectTabSelected,
  tabOptions,
  tabSelect,
} from './view-photo-gallery.state'
import { filter } from './view-photo-gallery.utils'
import UICardPhoto from './ui-card-photo'
import UIGrid from './ui-grid'
import UIStack from './ui-stack'
import UITabs from './ui-tabs'
import styles from './view-photo-gallery.module.css'

const ViewPhotoGallery: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { data: photos } = useGetPhotosQuery()
  const photoSelected = useSelector(selectPhotoSelected)
  const tabSelected = useSelector(selectTabSelected)

  const filteredPhotos = filter(photos ?? [], tabSelected)

  // Note clear selected photo if it is not part of filteredPhotos
  useEffect(() => {
    if (!filteredPhotos.find((photo) => photo.id === photoSelected?.id)) {
      dispatch(photoDeselect())
    }
  }, [filteredPhotos, photoSelected, dispatch])

  return (
    <UIStack>
      <UITabs onChange={(tab) => dispatch(tabSelect(tab))} options={tabOptions} value={tabSelected} />

      <UIGrid>
        {filteredPhotos?.map((photo) => (
          <UICardPhoto
            active={photoSelected?.id === photo.id}
            className={styles.item}
            key={photo.id}
            onClick={() => {
              if (photo.id === photoSelected?.id) {
                dispatch(photoDeselect())
              } else {
                dispatch(photoSelect(photo))
              }
            }}
            value={photo}
          />
        ))}
      </UIGrid>
    </UIStack>
  )
}

export default ViewPhotoGallery
