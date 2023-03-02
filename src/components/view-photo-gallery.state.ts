import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { Photo } from '../services/service-photo'
import type { RootState } from '../store'
import type { Tab } from './ui-tabs'

type StatePhotoSelected = {
  value: Photo | null
}

const photoSelectedReducers = {
  photoSelect: (state: StatePhotoSelected, action: PayloadAction<Photo>) => {
    state.value = action.payload
  },
  photoDeselect: (state: StatePhotoSelected, action: PayloadAction<Photo>) => {
    state.value = null
  },
}

export const photoSelectedSlice = createSlice<StatePhotoSelected, typeof photoSelectedReducers>({
  initialState: { value: null },
  name: 'ViewPhotoGallery_photoSelected',
  reducers: photoSelectedReducers,
})

export const { photoSelect, photoDeselect } = photoSelectedSlice.actions

export const selectPhotoSelected = (state: RootState) => state.photoSelected.value

type StateTabSelected = {
  value: Tab
}

const tabSelectedReducers = {
  tabSelect: (state: StateTabSelected, action: PayloadAction<Tab>) => {
    state.value = action.payload
  },
}

export const tabOptions = [
  {
    id: 'recently',
    label: 'Recently Added',
  },
  {
    id: 'favorite',
    label: 'Favorited',
  },
]

export const tabSelectedSlice = createSlice<StateTabSelected, typeof tabSelectedReducers>({
  initialState: { value: tabOptions[0] },
  name: 'ViewPhotoGallery_tabSelected',
  reducers: tabSelectedReducers,
})

export const { tabSelect } = tabSelectedSlice.actions

export const selectTabSelected = (state: RootState) => state.tabSelected.value
