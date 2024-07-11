'use client'
import React from 'react'
import styles from './styles/pianoKey.module.css'
import { Practice } from '@/public/page-data'





const PianoKey = ({data: {id, name, photo, photo2, excerpt}, handleThemeChange, handleThemeSmallTextChange}:{data:Practice, handleThemeChange: any, handleThemeSmallTextChange: any}) => {



  return (

    <div
    className={styles.pianoKey}
    style={{backgroundImage: `url(${photo})` }}
    id={id}
    onMouseOver={()=> {handleThemeChange(name); console.log(name); handleThemeSmallTextChange(excerpt)
    }}
    >

    </div>

  )


}

export default PianoKey