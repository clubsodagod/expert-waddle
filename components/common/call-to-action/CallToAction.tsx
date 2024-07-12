import React, { useState } from 'react'
import styles from "./call-to-action.module.css" 
import { Button } from '@mui/material'
import CallToActionForm from './building-blocks/CallToActionForm';
import { immediateHelpForm } from '@/public/page-data';

const CallToAction = () => {

  const [showButtons, setShowButtons] = useState(true);

  const handleSignUpClick = () => {
    setShowButtons(!showButtons);
  };

  return (

    <div
    className={styles.wrapper}
    >
      
      <div
      className={styles.textCtn}
      >

        <h2>
          When it get&apos;s real. <span className={styles.nasser}>Nasser Care</span>.
        </h2>
        <p className={styles.learnMoreText} >It&apos;s impossible to predict the unexpected. Have your worries taken care of with Nasser Care.</p>

      </div>

      {
        showButtons ? 
          <div className={styles.btnCtn}>

            <Button onClick={()=> {handleSignUpClick()}} variant='contained' className={styles.containedBtn}>Sign Up Now</Button>
            <Button variant='outlined' className={styles.outlinedBtn}>Learn More</Button>
          </div>        
        : <CallToActionForm form={immediateHelpForm} />
      }



    </div>
  
  )
}

export default CallToAction