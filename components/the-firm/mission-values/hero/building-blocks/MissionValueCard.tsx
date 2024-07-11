import React, { useRef } from 'react'
import styles from '../mission-value.module.css'
import { CoreValue } from '@/public/page-data';
import { url } from 'inspector';


const MissionValueCard: React.FC<{
  coreValue:CoreValue, 
  missionStatement:string,
  index:number,
}> = ({
  coreValue: {
    value,
    videoMobileUrl,
    videoUrl,
  },
  missionStatement,
  index,
}) => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  const coreValueCard = () => {

    return (
      <div
      className={styles.missionStatementCardWrapper}
      >

            <video
            ref={videoRef}
            className={styles.missionCardVideo}
            muted
            loop
            preload="auto"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        <div className={styles.missionCardTextWrapper}>
          <h1 className={styles.missionCardH1}>
            {value}
          </h1>          
        </div>
            
      
      </div>
      
    )
  }

  const missionStatementCard = () => {

    return (
      <div
      className={styles.missionStatementCardWrapper}
      >

            <video
            ref={videoRef}
            className={styles.missionCardVideo}
            muted
            loop
            preload="auto"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        <div className={styles.missionCardTextWrapper}>
          <h1 className={styles.missionCardH1}>
            {value}
          </h1>          
        </div>
            
      
      </div>
      
    )
  }

  return (
   <div>
    {coreValueCard()}
   </div>
  )
}



export default MissionValueCard;