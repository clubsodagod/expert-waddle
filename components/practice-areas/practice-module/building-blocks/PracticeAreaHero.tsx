import React from 'react'
import styles from "../practice-modules.module.css"
import BigText from './common/BigText'
import MediumText from './common/MediumText'
import SmallText from './common/SmallText'
import CallToAction from '@/components/common/call-to-action/CallToAction'
import { PracticePage } from '@/public/page-data'


interface PracticeAreaHeroProps {
    practice: PracticePage;
  }
  

const PracticeAreaHero: React.FC<PracticeAreaHeroProps> = ({ practice }) => {

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