import type { FunctionComponent } from 'react'

import ViewPhotoDetails from './view-photo-details'
import ViewPhotoGallery from './view-photo-gallery'

const PageLanding: FunctionComponent = () => {
  return (
    <div>
      <header>
        <h1>Photos</h1>
      </header>

      <main>
        <ViewPhotoGallery />
      </main>

      <aside>
        <ViewPhotoDetails />
      </aside>
    </div>
  )
}

export default PageLanding
