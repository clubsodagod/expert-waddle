import { Typography } from '@mui/material'
import React from 'react'
import styles from "../styles/practice-areas.module.css"

const SmallText:React.FC<{theme:string}> = ({theme}) => {
  return (
    <div>
      <h3 className={styles.text}>{theme}</h3>
    </div>
  )
}

export default SmallText