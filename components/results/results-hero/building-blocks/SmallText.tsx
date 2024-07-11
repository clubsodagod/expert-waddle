import { Typography } from '@mui/material'
import React from 'react'
import styles from "../../results.module.css"

const SmallText = () => {
  return (
    <div>
      <Typography className={styles.text} component={'p'} variant='caption' >
        Over 200+ years of experience fighting and winning!
      </Typography>
    </div>
  )
}

export default SmallText