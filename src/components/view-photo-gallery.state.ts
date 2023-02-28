import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { Photo } from '../services/service-photo'
import type { RootState } from '../store'

type StatePhotoSelected = {
  value: Photo | null
}

const photoSelectedReducers = {
  photoDeselect: (state: StatePhotoSelected) => {
    state.value = null
  },

  photoSelect: (state: StatePhotoSelected, action: PayloadAction<Photo>) => {
    state.value = action.payload
  },
}

export const photoSelectedSlice = createSlice<StatePhotoSelected, typeof photoSelectedReducers>({
  initialState: { value: null },
  name: 'ViewPhotoGallery_photoSelected',
  reducers: photoSelectedReducers,
})

export const { photoSelect, photoDeselect } = photoSelectedSlice.actions

export const selectPhotoSelected = (state: RootState) => state.photoSelected.value
