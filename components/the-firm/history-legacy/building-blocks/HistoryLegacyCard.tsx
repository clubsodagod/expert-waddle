"use client"

import React, { useEffect, useRef, useState } from 'react'
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


  const videoRef = useRef<HTMLVideoElement>(null);

  return (
   <div
   className={styles.historyLegacyCardWrapper}
   >
    

      <video
      ref={videoRef}
      className={styles.historyLegacyCardVideo}
      muted
      loop
      preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div
    onMouseEnter={()=>{setHovered(!hovered)}}
    onMouseLeave={()=>{setHovered(!hovered)}}
    className={styles.historyLegacyTextWrapper}
    >
      
      <p className={styles.cardTitle}>{title}</p>
      


      {/* <p className={styles.cardDescription}>{description}</p> */}
      <p className={styles.cardCredentials}>{year}</p>
    </div>
    
    
   </div>
  )
}



export default HistoryLegacyCard;