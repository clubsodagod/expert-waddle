"use client"

import React, { useEffect, useState } from "react"
import styles from "../../styles/practice-areas.module.css"
import { PracticeAreaDetail, freeConsultationForm, practiceAreaDetails } from "@/public/page-data"
import Area from "./Area"
import { styleText } from "util"
import BigText from "../BigText"
import MediumText from "../MediumText"
import SmallText from "../SmallText"
import { Button } from "@mui/material"
import CallToAction from "@/components/common/call-to-action/CallToAction"
import CallToActionForm from "@/components/common/call-to-action/building-blocks/CallToActionForm"


export const isMobile = (): boolean => {
    return window.innerWidth < window.innerHeight;
  };




const DynamicOverlay = () => {
  const [theme, setTheme] = useState("Nasser Law")
  const [themeSmallText, setThemeSmallText] = useState("For all your legal needs.");
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleConsultationClick = () => {
    setShowButtons(!showButtons);
  };



  const handleThemeChange = (themeName:string) => {
    setTheme(themeName)
    console.log(themeName);
    
  };

  const handleThemeSmallTextChange = (smallText:string) => {
    setThemeSmallText(smallText)
    console.log(smallText);
    
  }
  
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < window.innerHeight);
      };
  
      // Check initially when the component mounts
      checkIsMobile();
  
      // Add event listener to handle window resize
      window.addEventListener('resize', checkIsMobile);
  
      // Clean up the event listener on component unmount
      return () => window.removeEventListener('resize', checkIsMobile);
    }, []);


  return (


    <div
    className={styles.dynamicOverlayWrapper}
    >
        
      <div 
      className={styles.wrapper}
      >

              <div
              className={styles.practiceLeftColumn}
              >
                
                  {/* <BigText /> */}
                  <MediumText practiceArea={theme} />
                  <SmallText theme={themeSmallText}/>

                {
                  showButtons ? 
                    <div className={styles.btnCtn}>
                      <Button onClick={()=> {handleConsultationClick()}} variant='contained' className={styles.btn}>
                        Free Consultation
                      </Button>
                      <Button variant='outlined' className={styles.btn}>
                        Learn More
                      </Button>
                    </div>                  
                  : <CallToActionForm form={freeConsultationForm} />
                }

              </div>

              <div
              className={styles.practiceRightColumn}
              >
                  <CallToAction />
              </div>    
          
      </div>
      <div
          className={styles.dynamicOverlayCtn}>

          {
              practiceAreaDetails.map((p: PracticeAreaDetail, i:number) => {

                  if (isMobile) {
                      
                      return (
                          <Area url={p.video.url} alt={p.videoMobile.alt} key={i} name={p.name} handleThemeChange={handleThemeChange} handleThemeSmallTextChange={handleThemeSmallTextChange} excerpt={p.quote} />
                      )                    
                  } else {
                          console.log(isMobile);
                      return (

                          
                          <Area url={p.videoMobile.url} alt={p.video.alt} key={i} name={p.name} handleThemeChange={handleThemeChange} handleThemeSmallTextChange={handleThemeSmallTextChange} excerpt={p.quote} />
                      )
                  }
                  

              })
          }

      </div>
      
      <div
      className={styles.areaOverlay} />

    </div>

  )
}

export default DynamicOverlay