import { PracticePage, UnorderedItem } from '@/public/page-data'
import React from 'react'
import styles from "../practice-modules.module.css"



type KeyTakeAwayProps = PracticePage['takeAways'];

const KeyTakeAways:React.FC<{takeAways:KeyTakeAwayProps}> = ({takeAways}) => {



  return (
    <div>

      <h2>
        Always remember
      </h2>

      {
        takeAways.map((t:UnorderedItem, i:number) => {
          return (

            <li key={i}>
              <span className={styles.boldName}>{t.name} </span>{t.short}
            </li>
          )
        })
      }
    </div>
  )
}

export default KeyTakeAways