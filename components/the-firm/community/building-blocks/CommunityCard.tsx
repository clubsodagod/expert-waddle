import React, { useEffect, useRef, useState } from 'react'
import styles from '../community.module.css'
import { title } from 'process';
import { CommunityInvolvement } from '@/public/page-data';


const CommunityCard: React.FC<{
  community:CommunityInvolvement
}> = ({
  community:{
    title,
    videoUrl
  }
}) => {

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(()=> {
    {hovered && hovered}
  },[hovered])


  const videoRef = useRef<HTMLVideoElement>(null);



  return (
   <div
   className={styles.communityCardWrapper}
   >
     
 
       <video
       ref={videoRef}
       className={styles.communityCardVideo}
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
        className={styles.communityTextWrapper}
        >
          
          <p className={styles.cardTitle}>{title}</p>
          
    
    
        </div>
     
     
    </div>
  )
}



export default CommunityCard;