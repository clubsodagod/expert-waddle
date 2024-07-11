import { IUseClickToScroll } from "@/types/global";
import { log } from "console";
import { useCallback } from "react";




export const useClickToScroll = ({direction, elementId, refClick}:any) => {
    console.log(direction, elementId, refClick);
    
    
        const element = document.getElementById(elementId);
        console.log(element);
        const newRef = refClick?.current;
        console.log(newRef);
        
         if (refClick?.current) {
            console.log("anotherTest");
            
          if (direction === 'left') {
            refClick.current.scrollLeft -= 250;
            console.log("Scrolled left");
            
          } else if (direction === 'right') {
            refClick.current.scrollLeft += 250;
            console.log("Scrolled left");
          }
        }
      
}

export function formatDollarAmount(amount:number) {
  if (amount >= 1e6) {
    return `$${(amount / 1e6).toFixed(1)}M`;
  } else if (amount >= 1e3) {
    return `$${(amount / 1e3).toFixed(1)}K`;
  } else {
    return `$${amount.toFixed(2)}`;
  }
}


