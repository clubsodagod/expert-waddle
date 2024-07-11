import React from 'react'
import styles from "../results.module.css"

const ResultsBackgroundVideo: React.FC<{url:string}> = ({url}) => {

    const video = url !== "" ? url : "/results-page-videos/records_base_med.mp4"
  return (
    <div>
        <video
            muted
            loop
            autoPlay
            className={styles.resultsBgVideo}
            preload="auto"
            >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>        
    </div>
 
  )
}

export default ResultsBackgroundVideo