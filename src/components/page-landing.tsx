import type { FunctionComponent } from 'react'

import UIStack from './ui-stack'
import UITypography from './ui-typography'
import ViewPhotoDetails from './view-photo-details'
import ViewPhotoGallery from './view-photo-gallery'
import styles from './page-landing.module.css'

const PageLanding: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <UIStack as="main" className={styles.main}>
        <UITypography variant="heading1">Photos</UITypography>

        <ViewPhotoGallery />
      </UIStack>

      <aside className={styles.aside}>
        <ViewPhotoDetails />
      </aside>
    </div>
  )
}

export default PageLanding
