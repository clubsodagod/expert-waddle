"use client"
import React from 'react'
import PracticeAreaHero from './building-blocks/PracticeAreaHero'
import { PracticePage, practicePages } from '@/public/page-data'
import KeySections from './building-blocks/KeySections'
import KeyTakeAways from './building-blocks/KeyTakeAways'
import ValueProposition from './building-blocks/ValueProposition'
import Precedents from './building-blocks/Precedents'
import FAQs from './building-blocks/FAQs'
import { useParams } from 'next/navigation'
import slugify from 'slugify'

const PracticeModule = () => {


  const params = useParams()
  console.log(params);
  

  const practiceArea = practicePages.find(
    (area) => slugify(area.name).toLowerCase() === params?.practice
  );

  const data: PracticePage = practiceArea!;

  const practice = data;
  console.log(practice);

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