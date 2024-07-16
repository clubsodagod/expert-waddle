import React from 'react'
import styles from './community.module.css'
import { CommunityInvolvement } from '@/public/page-data'
import { CTA } from '@/components'


const CommunityHero: React.FC<{
  community:CommunityInvolvement,
}> = ({
  community:{
    title,
    description,
  }
}) => {

  return (
    <div
    className={styles.communityHeroWrapper}
    >
     
 
     <div
         className={styles.leftCommunityColumn}
         >
         
             <div
             className={styles.communityTextBox}
             >
 
                 <h1
                 className={styles.communityH1}
                 >
                     Our Community
                 </h1>
 
                 <h2
                 className={styles.communityH2}
                 >
                     Your Advocate. Your Partner. Your Voice in Justice.
                 </h2>
 
 
             <div
             className={styles.communityPillarsCtn}
             >
                 <p
                 className={styles.communityPillarTitle}
                 >
                     {title}
                 </p>
                 <p
                 className={styles.communityPillarDescription}
                 >
                     {description}
                 </p>        
             </div>
             
 
             </div>        
         </div>
 
 
         <div
         className={styles.communityRightColumn}
         >
             <CTA />
         </div>
         
    </div>
  )
}



export default CommunityHero;