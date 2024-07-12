"use client"
import React from 'react'
import styles from "../practice-modules.module.css"
import BigText from './common/BigText'
import MediumText from './common/MediumText'
import SmallText from './common/SmallText'
import CallToAction from '@/components/common/call-to-action/CallToAction'
import { PracticePage, practicePages } from '@/public/page-data'
import { useParams } from 'next/navigation'
import slugify from 'slugify'


interface PracticeAreaHeroProps {
    practice: PracticePage;
  }
  

const PracticeAreaHero: React.FC = () => {


  const params = useParams()
  console.log(params);
  

  const practiceArea = practicePages.find(
    (area) => slugify(area.name).toLowerCase() === params?.practice
  );

  const data: PracticePage = practiceArea!;

  const practice = data;
  console.log(practice);

    const {
        name,
        overview,
    } = practice;

  return (
    <div
    className={styles.heroWrapper}
    >
        <div
        className={styles.leftHeroColumn}
        >
            <BigText name={name} />
            <MediumText overview={overview}  />

        </div>

        <div
        className={styles.rightHeroColumn}
        >
            <CallToAction />
        </div>

    </div>
  )
}

export default PracticeAreaHero