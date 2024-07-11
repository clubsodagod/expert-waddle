import { Typography } from '@mui/material'
import React from 'react'
import styles from "../styles/headshot-avatar.module.css"
import { Attorney } from '@/public/page-data'

const HeadshotBanner = ({data:{name, experience, bio}, index}:any) => {

  const title = index === 0 ? "focusedAttorneyTitleText" : "attorneyTitleText"
  const subtitle = index === 0 ? "focusedAttorneySubtitleText" : "attorneySubtitleText"
  const subtitle2 = index === 0 ? "focusedAttorneySubtitle2Text" : "attorneySubtitle2Text"
  const textBox = index === 0 ? "focusedQuoteText" : "quoteText";

  return (
    <div className={styles[textBox]}>
        <p className={styles[title]}>
          {name}
        </p>
        <p className={styles[subtitle]}>
            {experience} years
        </p>
        {
          index === 0 &&
          <p className={styles[subtitle2]}>
              {bio}
          </p>          
        }

    </div>
  )
}

export default HeadshotBanner