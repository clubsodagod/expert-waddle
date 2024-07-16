import React from 'react'
import styles from '../the-firm-hero/styles/the-firm.module.css'
import FirmHeroBigText from './building-blocks/FirmHeroBigText'
import FirmHeroMedText from './building-blocks/FirmHeroMedText'
import FirmHeroSmallText from './building-blocks/FirmHeroSmallText'
import { CTA } from '@/components'
import { Avatar } from '@mui/material'


const FirmHero = () => {
  const photo = "/image-assets/o.png";
  return (
    <div
    className={styles.firmHero}
    >
      <div
      className={styles.heroLeftColumn}
      >
        <div className={styles.firmHeroTextBox}>
          <FirmHeroBigText />
          <FirmHeroMedText />
          {/* <FirmHeroSmallText />             */}
        </div>

        <div
        className={styles.attorneyImgCtn}
        >
            <Avatar 
            variant='square' src={photo} className={styles.attorneyImg} alt='' 
            />
        </div>     
              
      </div>

      <div
      className={styles.heroRightColumn}
      >
        <CTA />
      </div>

      
    </div>
  )
}

export default FirmHero