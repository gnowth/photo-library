'use client'

import type { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { selectPhotoSelected } from './view-photo-gallery.state'

const ViewPhotoDetails: FunctionComponent = () => {
  const photoSelected = useSelector(selectPhotoSelected)

  return photoSelected && <p>ViewPhotoDetails</p>
}

export default ViewPhotoDetails
