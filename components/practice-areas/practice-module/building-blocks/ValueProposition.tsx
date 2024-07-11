import React from 'react'
import styles from "../practice-modules.module.css"


import { ValueDetail } from '@/public/page-data'
import { businessName } from '@/components/first-load/piano-key-hero/utlity/const'


const ValueProposition: React.FC<{values:ValueDetail[], index:number}> = ({values, index}) => {

  const value = values[index];
  const {
    name,
    ourValue,
    commonSituations,
  } = value;

  return (

    <div>

      <h2>
        When it comes to {name}
      </h2>
      
      <h4>
        Nasser Law is in your corner.
      </h4>

      <h5>
        When life happens. {commonSituations}
      </h5>

      <h5>
        Our Offer.
      </h5>

      <ul>

        {
          ourValue.map((v:string, i:number) => {
            return (
               <li key={i}>
                {v}
               </li>
            )
          })
        }
      </ul>


    </div>
  )
}

export default ValueProposition