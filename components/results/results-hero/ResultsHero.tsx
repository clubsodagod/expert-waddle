import React from 'react'
import SmallText from './building-blocks/SmallText'
import LargeText from './building-blocks/LargeText'
import MediumText from './building-blocks/MediumText'
import ResultsCTA from '../results-cta/ResultsCTA'
import styles from "../results.module.css"

const ResultsHero = () => {
  return (
    <div className={styles.resultsHeroWrapper}>

        <div className={styles.leftResultsHeroColumn}>
            <LargeText />
            <MediumText />
            <SmallText />
            
        </div>

        <div className={styles.rightResultsHeroColumn}>
            <ResultsCTA />

        </div>
    </div>
  )
}

export default ResultsHero