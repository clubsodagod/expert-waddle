import React from 'react'
import { businessName } from '../utlity/const'
import styles from "./styles/piano-key-hero.module.css"
import { Hurricane } from 'next/font/google';



const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400'
});



const BigText = () => {
  return (
    <div className={hurricane.className}>
      <h1 className={styles.text}>
        {businessName}
      </h1>
    </div>
  )
}

export default BigText