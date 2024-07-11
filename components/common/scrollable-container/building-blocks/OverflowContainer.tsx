import React, { ReactNode } from 'react'
import styles from "../styles/scrollable-container.module.css"



const OverflowContainer:React.FC<{
  children: ReactNode,
  refOverflow: React.MutableRefObject<HTMLDivElement | null>
}> = (
  {
    children,
    refOverflow
  }
) => {
  return (
    <div
    ref={refOverflow}
    className={styles.overflowContainer}
    >
        
        {children}
    </div>
  )
}

export default OverflowContainer