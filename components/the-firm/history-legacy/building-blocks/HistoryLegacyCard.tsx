"use client"

import React, { useEffect, useState } from 'react'
import styles from '../history-legacy.module.css'
import { HistoryLegacy } from '@/public/page-data'


const HistoryLegacyCard: React.FC<{
  event:HistoryLegacy,
  index:number,
}> = ({
  event: {
    title,
    description,
    year,
    imageUrl,
    videoUrl,
  },
  index,
}) => {

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(()=> {
    {hovered && hovered}
  },[hovered])

  return (
   <div
   className={styles.historyLegacyCardWrapper}
   >
    
    <div
    className={styles.dynamicVisualWrapper}
    >
      
    </div>

    <div
    onMouseEnter={()=>{setHovered(!hovered)}}
    onMouseLeave={()=>{setHovered(!hovered)}}
    className={styles.textBox}
    >
      
      <p className={styles.cardTitle}>{title}</p>
      


      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardCredentials}>{year}</p>
    </div>
    
    
   </div>
  )
}



export default HistoryLegacyCard;