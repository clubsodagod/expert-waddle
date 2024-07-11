import React from 'react'
import PracticeAreaHero from './building-blocks/PracticeAreaHero'
import { PracticePage } from '@/public/page-data'
import KeySections from './building-blocks/KeySections'
import KeyTakeAways from './building-blocks/KeyTakeAways'
import ValueProposition from './building-blocks/ValueProposition'
import Precedents from './building-blocks/Precedents'
import FAQs from './building-blocks/FAQs'

const PracticeModule = ({practice}:{practice:PracticePage}) => {

  const {
    faqs,
    keySections,
    precedents,
    takeAways,
    examples,
    value: values,
  } = practice;

  const index = 0;

  return (
    <div>
      <KeySections keySections={keySections} />
      <KeyTakeAways takeAways={takeAways} />
      <ValueProposition values={values} index={index} />
      <Precedents precedents={precedents} index={index} examples={examples} />
      <FAQs faqs={faqs} index={index}  />

    </div>
  )
}

export default PracticeModule