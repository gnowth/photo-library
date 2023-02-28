'use client'

import type { FunctionComponent } from 'react'

import { useGetPhotosQuery } from '../services/service-photo'

const ViewPhotoGallery: FunctionComponent = () => {
  const { data: photos } = useGetPhotosQuery()

  return <p>ViewPhotoGallery</p>
}

export default ViewPhotoGallery
