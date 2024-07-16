import React, { useEffect, useRef, useState } from 'react'
import styles from '../our-approach.module.css'
import { Approach } from '@/public/page-data';


const OurApproachCard: React.FC<{
  approach:Approach
}> = ({
  approach:{
    title,
    videoUrl,
  }

}) => {

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(()=> {
    {hovered && hovered}
  },[hovered])


  const videoRef = useRef<HTMLVideoElement>(null);


  return (
    <div
    className={styles.approachCardWrapper}
    >
     
 
       <video
       ref={videoRef}
       className={styles.approachCardVideo}
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
        className={styles.approachTextWrapper}
        >
          
          <p className={styles.cardTitle}>{title}</p>
          
    
    
        </div>
     
     
    </div>
   
  )
}



export default OurApproachCard;