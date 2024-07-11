import React from 'react'
import styles from '../../results.module.css'
import Image from 'next/image';
import { CaseResult } from '@/public/page-data';
import NotListedLocationRoundedIcon from '@mui/icons-material/NotListedLocationRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { formatDollarAmount } from '@/utility/functions';

export const getOutcomeIcon = (outcome: string) => {
    console.log(outcome);
  switch (outcome) {
    
    case 'Not Guilty':
      return <CheckCircleOutlineRoundedIcon className={styles.outcomeIcon} style={{ color: 'green' }} />;
    case 'Settled':
      return <GavelRoundedIcon className={styles.outcomeIcon} style={{ color: 'orange' }} />;
    case 'Successful Merger':
      return <DoneOutlineRoundedIcon className={styles.outcomeIcon} style={{ color: 'blue' }} />;
    case 'Reduced Penalties':
      return <ErrorOutlineRoundedIcon className={styles.outcomeIcon} style={{ color: 'purple' }} />;
    default:
      return <NotListedLocationRoundedIcon className={styles.outcomeIcon} style={{ color: 'gray' }} />;
  }
};



const ResultCard: React.FC<{case:CaseResult}> = ({case: {photo, caseName, caseId, date, outcome, attorney,details, practiceArea, verdictAmount}}) => {

  const customLoader = ({src}: {src:string}) => {
    return src;
  };

  function renderActionButtons(id:string) {
    switch (id) {
      case "value":
        
        break;
    
      default:
        break;
    }
  }


  return (
   <div
   className={styles.resultCardWrapper}
   >

    <div className={styles.verdictWrapper}>

      <div className={styles.verdictFlexBox}>
        <div className={styles.verdictLogo} >
          {getOutcomeIcon(outcome)}
        </div>
        <p className={styles.outcomeText}>{outcome}</p>

      { 
      
        verdictAmount && 
        <p className={styles.verdictText}>{formatDollarAmount(verdictAmount)}</p>

      }
      </div>
    </div>

    <div
    className={styles.resultCardCtn}
    >

        <div
        className={styles.resultCardImageWrapper}
        >

          <Image src={photo!} width={255} height={175} loader={customLoader} alt='' className={styles.resultImage} />
        </div>   


      <div
      className={styles.informationWrapper}
      >

        <div className={styles.textBoxWrapper}>

          <p className={styles.caseNameText}>
            {caseName}
          </p>
          <p>Attorney: <span className={styles.attorneyText}>{attorney}</span></p>
          <p className={styles.detailsText}>{details}</p>
        </div>

        <div className={styles.actionsWrapper}>

        </div>

      </div>
    </div>
    
    <div className={styles.additionalInformationWrapper}>

      
    </div>

   </div>
  )
}



export default ResultCard;