import React from 'react'
import styles from "../practice-modules.module.css";
import { PracticePage, UnorderedItem } from '@/public/page-data';



type KeySectionsProps = PracticePage['keySections'];

// Typing the KeySections component
const KeySections: React.FC<{ keySections: KeySectionsProps }> = ({ keySections }) => {
  
  const {
    brief,
    commonOffenses: offenses,
  } = keySections;
  
  return (

    <div>
      
      <h2>
        Key Sections
      </h2>

      <p>
        {brief}
      </p>

      <ul>
        {
          offenses.map((o:UnorderedItem, i:number) => {
            return (

              <li key={i}>
                <span className={styles.boldOffense}>{o.name} </span>{o.short}
              </li>
            )
          })
        }
      </ul>

    </div>

  )
}

export default KeySections