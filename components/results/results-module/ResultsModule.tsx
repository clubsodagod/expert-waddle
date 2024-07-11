
import React from 'react'
import styles from '../results.module.css'
import { DynamicScrollCtn } from '@/components';
import { CaseResult, caseResults, cases } from '@/public/page-data';
import ResultCard from './building-blocks/ResultsCard';


const ResultsModule: React.FC<{}> = ({}) => {

  return (
   <div
   className={styles.resultsModuleWrapper}
   >

    <DynamicScrollCtn
    type={1}
    >
      {
        caseResults.map((c: CaseResult, i:number) => {

          return (
            <div className={styles.resultCardOutterWrapper} key={i}>
              <ResultCard 
              case={c}
              />              
            </div>

          )
        })
      }
    </DynamicScrollCtn>

   </div>
  )
}



export default ResultsModule; 