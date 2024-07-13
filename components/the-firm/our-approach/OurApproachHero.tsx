import React from 'react'
import styles from './our-approach.module.css'
import { CTA } from '@/components';
import { Approach } from '@/public/page-data';


const OurApproachHero: React.FC<{
  approach:Approach
}> = ({
  approach:{
    title,
    description,
}}) => {

  return (
   <div
   className={styles.approachHeroWrapper}
   >
    

    <div
        className={styles.leftApproachColumn}
        >
        
            <div
            className={styles.approachTextBox}
            >

                <h1
                className={styles.approachH1}
                >
                    Our Approach
                </h1>

                <h2
                className={styles.approachH2}
                >
                    Your Advocate. Your Partner. Your Voice in Justice.
                </h2>


            <div
            className={styles.approachPillarsCtn}
            >
                <p
                className={styles.approachPillarTitle}
                >
                    {title}
                </p>
                <p
                className={styles.approachPillarDescription}
                >
                    {description}
                </p>        
            </div>
            

            </div>        
        </div>


        <div
        className={styles.approachRightColumn}
        >
            <CTA />
        </div>
        
   </div>
  )
}



export default OurApproachHero;