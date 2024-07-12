"use client"

import React, { useEffect } from 'react'
import styles from "./styles/piano-key-hero.module.css"

const MedText = ({theme}:{theme: string}) => {

  useEffect(()=>{
    {
      theme && theme
    }
  }, [theme])

  

  return (
    <div>
      <h2 className={styles.text}>
        {theme}
      </h2>
    </div>
  )
}

export default MedText