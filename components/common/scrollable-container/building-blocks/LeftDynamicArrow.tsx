import React from 'react'
import styles from "../styles/scrollable-container.module.css"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useClickToScroll } from '@/utility/functions';


const LeftDynamicArrow: React.FC<
  {
    refLeft: React.MutableRefObject<HTMLDivElement|null>,
  }
> = ({
  refLeft,

}) => {

  const Click = () => {
     useClickToScroll({elementId:"",direction:"left", refClick:refLeft})
     return
  }
  return (
    <div
    className={styles.leftDynamicArrowCtn}
    >

      <div
      className={styles.leftDynamicArrow}
      >
        <ArrowBackIosNewRoundedIcon
        sx={
          {
            fontSize: "2rem"
          }
        }
      onClick={()=> {Click}} />
      </div>
    </div>
  )
}

export default LeftDynamicArrow