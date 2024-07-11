"use client"
import React from 'react'
import styles from '../attorney-roster/attorney-roster.module.css'
import { DynamicScrollCtn } from '@/components';
import { Attorney, attorneys } from '@/public/page-data';
import HeadshotAvatar from '../headshot-avatar/HeadshotAvatar';
import FocusedHeadshotAvatar from '../headshot-avatar/FocusedHeadshotAvatar';


const AttorneyRoster: React.FC<{handleAttorneyView: (id:string)=>void}> = ({handleAttorneyView}) => {

  return (
   <div>
    <DynamicScrollCtn
    type={0}
    >

    {
            attorneys.map((a:Attorney, i) => {

              if (i ===0) {
                return (

                  <div onClick={()=>{handleAttorneyView(a.id); console.log("test");
                  }} key={`${i} headshot avatar ${a}`} className={styles.overflowCtnWrapper}>
                    <FocusedHeadshotAvatar index={i} attorney={a}/>
                  </div>
                  
                )
              }

              return (

                <div onClick={()=>{handleAttorneyView(a.id); console.log("test");
                }} key={`${i} headshot avatar ${a}`} className={styles.overflowCtnWrapper}>
                  <HeadshotAvatar index={i} attorney={a}/>
                </div>
                
              )
            })
          }
    </DynamicScrollCtn>
   </div>
  )
}



export default AttorneyRoster;