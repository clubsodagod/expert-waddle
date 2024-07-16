import React from 'react'
import styles from "../styles/practice-areas.module.css"
import { Hurricane } from 'next/font/google';






const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400'
});


const MediumText: React.FC<{practiceArea: any}> = ({practiceArea}) => {
  return (
    <div>

      {
        practiceArea === "Nasser Law" ? 
        <h2 className={hurricane.className}
        style={{
          fontSize: "7rem",
          lineHeight: "50%",
          color: "#DECC50",
          marginBlock: "7vh 0",
        }}
        >
          {practiceArea ? practiceArea : "Nasser Law"}
        </h2>
        :
        <h2 className={styles.text}>
          {practiceArea ? practiceArea : "Nasser Law"}
        </h2>
      }
      
    </div>
  )
}

export default MediumText