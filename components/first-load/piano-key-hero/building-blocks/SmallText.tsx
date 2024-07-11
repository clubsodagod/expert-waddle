"use client"

import React, { useEffect } from 'react'
import styles from "./styles/piano-key-hero.module.css"

const SmallText = ({theme}:{theme: string}) => {

  useEffect(()=>{
    {
      theme && theme
    }
  }, [])

  return (
    <div>
      <h3 className={styles.text}>
        {theme}        
      </h3>
    </div>
  )
}

export default SmallText