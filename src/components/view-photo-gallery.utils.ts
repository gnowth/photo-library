import type { Photo } from '../services/service-photo'
import type { Tab } from './ui-tabs'

type ItemSortable = {
  sortDate: Date
}

type ItemFavorited = {
  favorited: boolean
}

function sortByRecently(filter: Tab) {
  if (filter.id !== 'recently') {
    return () => 0
  }

  return (item1: ItemSortable, item2: ItemSortable) => {
    const time1 = item1.sortDate.getTime()
    const time2 = item2.sortDate.getTime()

    if (time1 === time2) {
      return 0
    }

    return time1 > time2 ? -1 : 1
  }
}

function filterByFavorite(filter: Tab) {
  if (filter.id === 'favorite') {
    return (item: ItemFavorited) => item.favorited
  }

  return () => true
}

function mapPhotoWithDate(photo: Photo): Photo & ItemSortable {
  return {
    ...photo,
    sortDate: new Date(photo.createdAt),
  }
}

// Note: remove date since sortDate is not serialisable
function mapPhotoWithoutDate(photo: Photo & ItemSortable): Photo {
  const newPhoto = { ...photo }

  delete newPhoto['sortDate']

  return newPhoto
}

export function filter(photos: Photo[], filter: Tab) {
  return photos
    ?.map(mapPhotoWithDate)
    .filter(filterByFavorite(filter))
    .sort(sortByRecently(filter))
    .map(mapPhotoWithoutDate)
}
