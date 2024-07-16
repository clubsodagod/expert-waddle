import React from 'react'
import styles from './our-approach.module.css'
import { DynamicScrollCtn } from '@/components';
import { Approach, firmPage } from '@/public/page-data';
import OurApproachCard from './building-blocks/OurApproachCard';


const OurApproachScrollCtn: React.FC<{
  handleApproachView: (clickedCard:number)=>void,
}> = ({
  handleApproachView
}) => {

  const ourApproach = firmPage.ourApproach;

  return (
   <div>

        <DynamicScrollCtn type={4}>

            {
              ourApproach.map((a:Approach,i:number) => (
                <div
                className={styles.approachCardOutterWrapper}
                key={`${a.title} ${i}`}
                onClick={()=>{handleApproachView(i)}}
                >
                  <OurApproachCard approach={a} />
                </div>
              ))
            }
        </DynamicScrollCtn>
   </div>
  )
}



export default OurApproachScrollCtn;