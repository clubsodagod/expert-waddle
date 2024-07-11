"use client"
import ResultsHero from '@/components/results/results-hero/ResultsHero'
import ResultsModule from '@/components/results/results-module/ResultsModule'
import React from 'react'
import styles from "./results-page.module.css"
import ResultsBackgroundVideo from '@/components/results/results-bg-video/ResultsBackgroundVideo'

const page = () => {
  return (
    <div>
      <ResultsBackgroundVideo url='' />
      <div 
      className={styles.resultsWrapper}
      >

        <ResultsHero />
        <ResultsModule />
      </div>      
    </div>

  )
}

export default page