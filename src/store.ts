import type { ConfigureStoreOptions } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { photoSelectedSlice, tabSelectedSlice } from './components/view-photo-gallery.state'
import { photoApi } from './services/service-photo'

export const createStore = (options?: Pick<Partial<ConfigureStoreOptions>, 'preloadedState'>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
    preloadedState: options?.preloadedState ?? {},
    reducer: {
      photoSelected: photoSelectedSlice.reducer,
      tabSelected: tabSelectedSlice.reducer,
      [photoApi.reducerPath]: photoApi.reducer,
    },
  })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
