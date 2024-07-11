import React from 'react'
import styles from './history-legacy.module.css'
import { DynamicScrollCtn } from '@/components';
import { firmPage, HistoryLegacy } from '@/public/page-data';
import HistoryLegacyCard from './building-blocks/HistoryLegacyCard';


const TimelineLegacy: React.FC<{}> = ({}) => {

    const events = firmPage.historyLegacy;

  return (
   <DynamicScrollCtn type={5}>
    {
        events.map((e:HistoryLegacy, index:number) => {
            return (
                <HistoryLegacyCard index={index} event={e} />
            )
        })
    }
   </DynamicScrollCtn>
  )
}



export default TimelineLegacy;