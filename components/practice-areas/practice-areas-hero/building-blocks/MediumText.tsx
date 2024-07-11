import React from 'react'
import styles from "../styles/practice-areas.module.css"






const MediumText: React.FC<{practiceArea: any}> = ({practiceArea}) => {
  return (
    <div>
      <h2 className={styles.text}>
        {practiceArea}
      </h2>
      
    </div>
  )
}

export default MediumText