"use client"

import { 
  AttorneyView, 
  FirmController, 
  HistoryLegacyHero, 
  MissionValuesHero, 
  FirmHero, 
  CommunityHero, 
  OurApproachHero, 
  MissionValuesScrollCtn,
  TimelineLegacy,
  OurApproachScrollCtn,
  CommunityScrollCtn
} from '@/components'
import ScrollableContainer from '@/components/common/scrollable-container/ScrollableContainer'
import AttorneyRoster from '@/components/the-firm/attorney-roster/AttorneyRoster'
import HeadshotAvatar from '@/components/the-firm/headshot-avatar/HeadshotAvatar'
import { Approach, Attorney, attorneys, CoreValue, firmPage, HistoryLegacy } from '@/public/page-data'
import React, { useEffect, useState } from 'react'



const TheFirmPage = () => {

  const [attorney, setAttorney] = useState<Attorney>(attorneys[0]);
  const [view, setView] =useState<number>(0);
  const [cv, setCv] = useState<CoreValue>(firmPage.coreValues[0])
  const [event, setEvent] = useState<number>(8);
  const [missionValue, setMissionValue] = useState<CoreValue>(firmPage.coreValues[0]);
  const [approach, setApproach] = useState<Approach>(firmPage.ourApproach[0])


  const handleModuleController = (label:string) => {
    const choice = firmPage.moduleButtons?.find((b) => b.label === label);
    
    switch (label) {
          case "Mission & Values":
            setView(1);
            
            break;
              case "History & Legacy":
                setView(2);
                
                break;
                  case "Meet the Lawyers":
                    setView(3);
                    
                    break;
                      case "Our Approach":
                        setView(4);
                        
                        break;
                          case "Community Involvement":
                            setView(5);
                            
                            break;
          
      default:
        setView(0);
        break;
    }
  }

  const handleAttorneyView = (id:string) => {
    const lawyer =  attorneys.find((a) => a.id === id );

    if (!lawyer) {
      return
    } else {
      setAttorney(lawyer);
    }
    return console.log(attorney, id);
    
  };

  const handleHistoryLegacyView = (clickedCard:number) => {
    return setEvent(clickedCard);
  }

  const missionValueHandler = (value:CoreValue) => {
    setCv(value);
  }

  const handleApproachView = (clickedCard:number) => {
    setApproach(firmPage.ourApproach[clickedCard]);
  }

  const handleView = () => {
    switch (view) {
      case 1:
        return <MissionValuesHero missionStatement={firmPage.missionStatement} coreValue={cv} />
        case 2:
          return <HistoryLegacyHero event={event} />
          case 3:
            return <AttorneyView attorney={attorney} /> 
            case 4:
              return <OurApproachHero approach={approach} />
              case 5:
                return <CommunityHero />
    
      default:
        return <FirmHero />
        break;
    }
  }

  const handleDynamicScrollCtnView = () => {
    switch (view) {
      case 1:
        return <MissionValuesScrollCtn mission={firmPage.missionStatement} coreValues={firmPage.coreValues} missionValueHandler={missionValueHandler}/>
        case 2:
          return <TimelineLegacy handleHistoryLegacyView={handleHistoryLegacyView} />
          case 3:
            return <AttorneyRoster handleAttorneyView={handleAttorneyView} /> 
            case 4:
              return <OurApproachScrollCtn handleApproachView={handleApproachView} />
              case 5:
                return <CommunityScrollCtn />
    
      default:
        return 
    }
  }


  useEffect(() => {

    {view && view};
    {cv && cv};
    {event && event}

  }, [view, cv])
  


  return (
    <div className="firmPageWrapper">

      {handleView()}
      

      <div
      
      >

        <FirmController handleModuleController={handleModuleController} />
      </div>

        <div className=''>
          {handleDynamicScrollCtnView()}
        </div>
        
          
    </div>

  )
}

export default TheFirmPage