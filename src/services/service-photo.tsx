import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import configs from '../configs'

type Person = {
  avatar: string
  id: string
  name: string
}

type Size = {
  height: number
  width: number
}

type PhotoData = {
  createdAt?: string
  description?: string
  dimensions?: Size
  favorited?: boolean
  filename?: string
  id?: string
  resolution?: Size
  sharedWith?: Person[]
  sizeInBytes?: number
  updatedAt?: string
  uploadedBy?: string
  url?: string
}

export type Photo = {
  createdAt: string | null
  description: string
  dimensions: string
  favorited: boolean
  filename: string
  id: string
  resolution: string
  sizeText: string
  updatedAt: string | null
  uploadedBy: string
  url: string | null
}

export type PhotoResponse = PhotoData[]

function getSizeFromBytes(size?: number): string {
  return `${Math.round((size * 10) / (1024 * 1024)) / 10} MB`
}

export const photoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: configs.baseUrl }),

  reducerPath: 'photoApi',

  tagTypes: ['Photo'],

  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => 'images.json',

      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Photo' as const, id })), { type: 'Photo', id: 'LIST' }]
          : [{ type: 'Photo', id: 'LIST' }],

      transformResponse: (response: PhotoResponse): Photo[] =>
        response.map((photo) => ({
          createdAt: photo.createdAt ?? null,
          description: photo.description ?? 'N/A',
          dimensions: `${photo.dimensions?.height ?? 0} x ${photo.dimensions?.width ?? 0}`,
          favorited: photo.favorited ?? false,
          filename: photo.filename ?? 'N/A',
          id: photo.id ?? '',
          resolution: `${photo.resolution?.height ?? 0} x ${photo.resolution?.width ?? 0}`,
          sharedWith: photo.sharedWith ?? [],
          sizeText: getSizeFromBytes(photo.sizeInBytes),
          updatedAt: photo.updatedAt ?? null,
          uploadedBy: photo.uploadedBy ?? 'Unknown',
          url: photo.url ?? null,
        })),
    }),

    // Note: using optimistic update to simulate local deletion of photo
    deletePhoto: builder.mutation<void, Photo>({
      query: ({ id, ...patch }) => ({
        url: `photo/${id}`,
        method: 'PATCH',
        body: patch,
      }),

      async onQueryStarted(photo, { dispatch }) {
        dispatch(
          photoApi.util.updateQueryData('getPhotos', undefined, (draft) =>
            draft.filter((item) => item.id !== photo.id),
          ),
        )
      },
    }),

    // Note: using optimistic update to simulate local favorite of photo
    favoritePhoto: builder.mutation<void, Photo>({
      query: ({ id, ...patch }) => ({
        url: `photo/${id}`,
        method: 'PATCH',
        body: patch,
      }),

      async onQueryStarted(photo, { dispatch }) {
        dispatch(
          photoApi.util.updateQueryData('getPhotos', undefined, (draft) =>
            draft.map((item) => (item.id === photo.id ? photo : item)),
          ),
        )
      },
    }),
  }),
})

export const { useGetPhotosQuery, useFavoritePhotoMutation, useDeletePhotoMutation } = photoApi
