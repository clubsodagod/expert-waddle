"use client"

import React, { useEffect, useState } from 'react'
import styles from './building-blocks/styles/piano-key-hero.module.css'
import PianoKey from './building-blocks/PianoKey'
import { Practice, PracticeAreaDetail, practiceAreas as data } from '@/public/page-data'
import DynamicOverlay from './building-blocks/DynamicOverlay'
import Area from '@/components/practice-areas/practice-areas-hero/building-blocks/dynamic-overlay/Area'





export const isMobile = (): boolean => {
  return window.innerWidth < window.innerHeight;
};




const PianoKeyHero = () => {
  const [theme, setTheme] = useState("LAW")
  const [themeSmallText, setThemeSmallText] = useState("For all your legal needs.");
  const [isMobile, setIsMobile] = useState(false);


  const handleThemeChange = (themeName:string) => {
    setTheme(themeName)
    console.log(themeName);
    
  };

  const handleThemeSmallTextChange = (smallText:string) => {
    setThemeSmallText(smallText)
    console.log(smallText);
    
  }

  useEffect(()=> {
    {
      theme && theme;
    }
    {
      themeSmallText && themeSmallText
    }

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < window.innerHeight);
    };

    // Check initially when the component mounts
    checkIsMobile();

    // Add event listener to handle window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [])


  return (

    <div
    className={styles.wrapper}
    >

      {
        data.map((e:Practice, i:number) => {

          if (isMobile) {
              
              return (
                  <Area url={e?.video?.url!} alt={e.videoMobile?.alt!} key={i} name={e.name} handleThemeChange={handleThemeChange} handleThemeSmallTextChange={handleThemeSmallTextChange} excerpt={e.excerpt} />
              )                    
          } else {
                  console.log(isMobile);
              return (

                  
                  <Area url={e?.video?.url!} alt={e.videoMobile?.alt!} key={i} name={e.name} handleThemeChange={handleThemeChange} handleThemeSmallTextChange={handleThemeSmallTextChange} excerpt={e.excerpt} />
              )
          }
          

      })
      }
                <DynamicOverlay themeName={theme} themeSmallText={themeSmallText}/>
    </div>

  )
}

export default PianoKeyHero