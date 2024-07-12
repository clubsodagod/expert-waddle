import React from 'react'
import styles from './mission-values-scroll-ctn.module.css'
import { DynamicScrollCtn } from '@/components';
import { CoreValue } from '@/public/page-data';
import MissionValueCard from '../hero/building-blocks/MissionValueCard';



const MissionValuesScrollCtn: React.FC<{
    mission: string, 
    coreValues: CoreValue[],
    missionValueHandler:(value:CoreValue)=>void,
}> = ({
    mission, 
    coreValues,
    missionValueHandler,
}) => {

  return (
   <div>

        <DynamicScrollCtn type={3}>
            {
                coreValues.length > 0 ?
                coreValues.map((cv:CoreValue, i:number) => {

                    if(i===0) {return <MissionValueCard missionStatement={mission} coreValue={cv} index={i} missionValueHandler={missionValueHandler} key={`${cv.value} ${i}`}/>}

                    return <MissionValueCard missionStatement={mission} coreValue={cv} index={i} missionValueHandler={missionValueHandler} key={`${cv.value} ${i}`}/>
                    
                })
                :
                "Sorry, currently there's a problem fetching the core values."
            }
        </DynamicScrollCtn>
   </div>
  )
}



export default MissionValuesScrollCtn;