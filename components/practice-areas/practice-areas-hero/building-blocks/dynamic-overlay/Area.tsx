"use client"

import React, { useRef } from 'react';
import styles from "../../styles/practice-areas.module.css"
import { isMobile } from './DynamicOverlay';
import { usePathname } from 'next/navigation';

const Area: React.FC<{url:string, alt:string, name?:string, excerpt:string, handleThemeChange: (name:string)=>void, handleThemeSmallTextChange:(excerpt:string)=>void}> = ({ url, alt,handleThemeSmallTextChange, handleThemeChange, name, excerpt }) => {

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    console.log(video);
    if (video) {
      handleThemeChange(name!)
      handleThemeSmallTextChange(excerpt)
      stopAllVideos();
      video.play();
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    console.log(video);
    if (video) {
      console.log(video);
      
      video.pause();
      // video.currentTime = 0; // Reset video to start
    }
  };

  const stopAllVideos = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      if (v !== videoRef.current) {
        v.pause();
        // v.currentTime = 0; // Reset video to start
      }
    });
  };

  const path = usePathname();
  console.log(path);
  

  const videoStyles = path === "/"? "backgroundVideo" : "backgroundVideoPractice"

    return (
            <video
            ref={videoRef}
            muted
            loop
            
            className={styles[videoStyles]}
            preload="auto"
            onMouseEnter={()=>{ handleMouseEnter()}}
            onMouseLeave={()=>{handleMouseLeave()}}
            >
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    )
};


export default Area