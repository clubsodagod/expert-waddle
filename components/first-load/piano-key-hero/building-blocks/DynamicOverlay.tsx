import React from 'react'
import styles from '../building-blocks/styles/piano-key-hero.module.css'
import BigText from './BigText'
import MedText from './MedText'
import SmallText from './SmallText'
import { medText } from '../utlity/const'
import { Button } from '@mui/material'

const DynamicOverlay = ({themeName, themeSmallText}: {themeName: string, themeSmallText: string}) => {

  
    

  return (
    <div className={styles.overlayWrapper}>

      <div className={styles.textWrapper}>
        <BigText />
        <MedText theme={themeName}  />
        <SmallText theme={themeSmallText} />

        <div className={styles.btnCtn}>
          <Button variant='contained' className={styles.btn}>
            Free Consultation
          </Button>
          <Button variant='outlined' className={styles.btn}>
            Learn More
          </Button>
        </div>
      </div>

    </div>
  )
}

export default DynamicOverlay