"use client"

import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { PracticePage, practiceAreas as practices, practiceAreas, practicePages } from '@/public/page-data';
import slugify from 'slugify'; 
import styles from "./styles/practice-area-page.module.css"
import PracticeAreaHero from '@/components/practice-areas/practice-module/building-blocks/PracticeAreaHero';
// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/router';
import { useParams, usePathname } from 'next/navigation';
import PracticeModule from '@/components/practice-areas/practice-module/PracticeModule';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = practices.map(p => ({
      params: { practice: slugify(p.name).toLowerCase() }
    }));
    
    return {
      paths,
      fallback: false, 
    };
}

const getProps = () => {
  const params = useParams()
  console.log(params);
  

  const practiceArea = practicePages.find(
    (area) => slugify(area.name).toLowerCase() === params?.practice
  );

  return  practiceArea ;
};


const PracticeAreaPage: React.FC = () => {

  const practice = getProps()!;
  console.log(practice);
  
  
  
  return (
    <div
    className={styles.pageWrapper}
    >

      <PracticeAreaHero practice={practice} />
      <PracticeModule practice={practice} />


    </div>
  )
}

export default PracticeAreaPage