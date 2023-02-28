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
  dimensions: Size
  favorited: boolean
  filename: string
  id: string
  resolution: Size
  sizeText: string
  updatedAt: string | null
  uploadedBy: string
  url: string | null
}

export type PhotoResponse = PhotoData[]

function getSizeFromBytes(size?: number): string {
  return ''
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
          favorited: photo.favorited ?? false,
          filename: photo.filename ?? 'N/A',
          id: photo.id ?? '',
          sharedWith: photo.sharedWith ?? [],
          sizeText: getSizeFromBytes(photo.sizeInBytes),
          updatedAt: photo.updatedAt ?? null,
          uploadedBy: photo.uploadedBy ?? 'Unknown',
          url: photo.url ?? null,
          dimensions: photo.dimensions ?? {
            height: 0,
            width: 0,
          },
          resolution: photo.resolution ?? {
            height: 0,
            width: 0,
          },
        })),
    }),
  }),
})

export const { useGetPhotosQuery } = photoApi
