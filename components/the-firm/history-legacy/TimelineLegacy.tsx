import React from 'react'
import styles from './history-legacy.module.css'
import { DynamicScrollCtn } from '@/components';
import { firmPage, HistoryLegacy } from '@/public/page-data';
import HistoryLegacyCard from './building-blocks/HistoryLegacyCard';


const TimelineLegacy: React.FC<{handleHistoryLegacyView:(clickedCard:number)=>void}> = ({handleHistoryLegacyView}) => {

    const events = firmPage.historyLegacy;

  return (
   <DynamicScrollCtn type={5}>
    {
        events.map((e:HistoryLegacy, index:number) => {
            return (
                <div key={`${e.title} ${index}`} onClick={()=>{handleHistoryLegacyView(index)}}>
                    <HistoryLegacyCard index={index} event={e}/>
                </div>
                
            )
        })
    }
   </DynamicScrollCtn>
  )
}



export default TimelineLegacy;