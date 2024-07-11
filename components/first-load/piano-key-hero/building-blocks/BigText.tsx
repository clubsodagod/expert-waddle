import React from 'react'
import { businessName } from '../utlity/const'
import styles from "./styles/piano-key-hero.module.css"

const BigText = () => {
  return (
    <div>
      <h1 className={styles.text}>
        {businessName}
      </h1>
    </div>
  )
}

export default BigText