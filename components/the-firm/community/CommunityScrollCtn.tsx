import React from 'react'
import styles from './community.module.css'
import { DynamicScrollCtn } from '@/components'
import { Approach, CommunityInvolvement, firmPage } from '@/public/page-data'
import OurApproachCard from '../our-approach/building-blocks/OurApproachCard'
import CommunityCard from './building-blocks/CommunityCard'


const CommunityScrollCtn: React.FC<{
  handleCommunityView: (clickedCard:number)=>void,
}> = ({
  handleCommunityView,
}) => {

  const communityInvolvement = firmPage.community;

  return (
   <div>

      <DynamicScrollCtn type={4}>

          {
            communityInvolvement.map((c:CommunityInvolvement,i:number) => (
              <div
              className={styles.communityCardOutterWrapper}
              key={`${c.title} ${i}`}
              onClick={()=>{handleCommunityView(i)}}
              >
                <CommunityCard community={c} />
              </div>
            ))
          }
      </DynamicScrollCtn>
   
   </div>
  )
}



export default CommunityScrollCtn;