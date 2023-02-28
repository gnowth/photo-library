'use client'

import type { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { useGetPhotosQuery } from '../services/service-photo'
import { photoSelect, photoDeselect } from './view-photo-gallery.state'

const ViewPhotoGallery: FunctionComponent = () => {
  const { data: photos } = useGetPhotosQuery()
  const dispatch = useDispatch()

  return (
    <div>
      <p>ViewPhotoGallery</p>
      <button onClick={() => photos[0] && dispatch(photoSelect(photos[0]))}>Select</button>
      <button onClick={() => dispatch(photoDeselect())}>Deselect</button>
    </div>
  )
}

export default ViewPhotoGallery
