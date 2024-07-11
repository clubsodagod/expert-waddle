import PracticeHero from '@/components/practice-areas/practice-areas-hero/PracticeHero'
import PracticeModule from '@/components/practice-areas/practice-module/PracticeModule'
import PracticePageModule from '@/components/practice-areas/practice-page-module/PracticePageModule'
import React from 'react'

const page = () => {
  return (
    <div
    className="practicePage"
    >
      <PracticeHero />
      <PracticePageModule />
    </div>
  )
}

export default page