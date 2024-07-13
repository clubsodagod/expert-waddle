
import React, { ChildContextProvider, ReactNode, useRef, useState, useEffect, CSSProperties } from 'react'
import styles from "../scrollable-container/styles/scrollable-container.module.css"
import LeftDynamicArrow from './building-blocks/LeftDynamicArrow'
import RightDynamicArrow from './building-blocks/RightDynamicArrow'
import OverflowContainer from './building-blocks/OverflowContainer'
import HeadshotAvatar from '@/components/the-firm/headshot-avatar/HeadshotAvatar'
import { attorneys } from '@/public/page-data'
import { useClickToScroll } from '@/utility/functions'

const ScrollableContainer: React.FC<{children: ReactNode, type: number}> = ({children, type}) => {
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const moduleControllerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });
  const [dynamicStyles, setDynamicStyles] = useState<CSSProperties>({})

  // Function to update the scroll position
  const updateScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollLeft } = scrollContainerRef.current;
      setScrollPosition({
        top: scrollTop,
        left: scrollLeft
      });
    }
  };

  // Update scroll position on scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollPosition);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateScrollPosition);
      }
    };
  }, []);

  const handleDynamicStyles = () => {
    switch (type) {
      case 0:
        
        return "attorneyWrapper"

          case 1:
            
            return "resultWrapper"

            case 2:
              
              return "attorneyModuleControllerWrapper"


              case 3:
              
              return "approachWrapper"

                case 5:
                  
                  return "historyLegacyWrapper"
  
    default:
          
    return "baseWrapper"
      break;
  }
  }

  const style = handleDynamicStyles();
  
  const Click = (direction:string) => {
    console.log(direction);
    
      useClickToScroll({elementId:"",direction:direction, refClick:scrollContainerRef})
  }

  const dynamicRef = () => {
    switch (type) {
      case 2: 

        return moduleControllerRef;

    
      default:
        return scrollContainerRef
  };
  }

  return (
    <div
    className={styles[style!]}
    >

      <div
      onClick={()=>{Click("left")}} 
      className={styles.buttonCtn}
      >
        <LeftDynamicArrow refLeft={dynamicRef()} />
      </div>
      

      <OverflowContainer refOverflow={dynamicRef()}>

        {children}
        
      </OverflowContainer>

      <div
      onClick={()=>{Click("right")}} 
      className={styles.buttonCtn}
      >
        <RightDynamicArrow refRight={dynamicRef()} />
      </div>
      
    </div>
  )
}

export default ScrollableContainer


