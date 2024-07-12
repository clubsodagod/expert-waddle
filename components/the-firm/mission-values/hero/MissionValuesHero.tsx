import React from 'react'
import styles from './mission-value.module.css'
import { CoreValue } from '@/public/page-data'
import { CTA } from '@/components'


const MissionValuesHero: React.FC<{
    missionStatement:string,
    coreValue: CoreValue
}> = ({
    missionStatement,
    coreValue: {value, excerpt},
}) => {

  return (
   <div
   className={styles.missionValuesHeroWrapper}
   >

        <div
        className={styles.heroLeftColumn}
        >
        
            <div
            className={styles.missionValuesTextBox}
            >

                <h1
                className={styles.missionValuesH1}
                >
                    The Firm&apos;s Mission
                </h1>

                <h2
                className={styles.missionValuesH2}
                >
                    {missionStatement}
                </h2>


            <div
            className={styles.missionValuesCoreValueCtn}
            >
                <p
                className={styles.missionValuesCoreValue}
                >
                    {value}
                </p>
                <p
                className={styles.missionValuesCoreValueExcerpt}
                >
                    {excerpt}
                </p>        
            </div>
            

            </div>        
        </div>


        <div
        className={styles.heroRightColumn}
        >
            <CTA />
        </div>
        
   </div>
   
  )
}



export default MissionValuesHero;