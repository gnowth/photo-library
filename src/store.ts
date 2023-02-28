import type { ConfigureStoreOptions } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { photoApi } from './services/service-photo'

export const createStore = (options?: Partial<ConfigureStoreOptions>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
    reducer: {
      [photoApi.reducerPath]: photoApi.reducer,
    },
    ...options,
  })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
