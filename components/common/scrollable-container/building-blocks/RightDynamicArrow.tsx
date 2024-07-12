import React from 'react'
import styles from "../styles/scrollable-container.module.css"
import { ArrowForwardIosRounded } from '@mui/icons-material'
import { useClickToScroll } from '@/utility/functions'


const RightDynamicArrow: React.FC<
{
  refRight: React.MutableRefObject<HTMLDivElement|null>,
}
> = ({refRight}) => {

  const Click = () => {
    useClickToScroll({elementId:"",direction:"right", refClick:refRight})
  }
  return (
    <div
    className={styles.rightDynamicArrowCtn}
    >

      <div
      className={styles.rightDynamicArrow}
      >
        <ArrowForwardIosRounded
        sx={
          {
            fontSize: "2rem",
            color:"blue"
          }
        }
        onClick={()=> {Click}}  />
      </div>
      
    </div>
  )
}

export default RightDynamicArrow