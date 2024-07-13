import React from 'react'
import styles from './history-legacy.module.css'
import { firmPage, HistoryLegacy } from '@/public/page-data';
import { CTA } from '@/components';



const HistoryLegacyHero: React.FC<{
  event:number,
}> = ({
  event,
}) => {

  const events = firmPage.historyLegacy;

  const title = event === 8 ? "Our History is Legacy" : events[event].title;
  const description = event === 8 ? "This is a marketable quote about how important it is for Nasser Law to make history." : events[event].description;


  
  return (
   <div
   className={styles.historyLegacyHeroWrapper}
   >

      <div className={styles.leftHistoryLegacyColumn}>

          <div
          className={styles.legacyHistoryHeroTextBox}
          >

            <h1 className={styles.historyLegacyH1}>
                {title}              
            </h1>

            <h2 className={styles.historyLegacyH2}>
                {description}
            </h2>
          
          </div>
          
      </div>

      <div className={styles.rightHistoryLegacyColumn}>
        <CTA />
      </div>
   </div>
  )
}



export default HistoryLegacyHero;