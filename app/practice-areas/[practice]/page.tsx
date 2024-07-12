

import {  GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { PracticePage, practiceAreas as practices, practiceAreas, practicePages } from '@/public/page-data';
import slugify from 'slugify'; 
import styles from "./styles/practice-area-page.module.css"
import PracticeAreaHero from '@/components/practice-areas/practice-module/building-blocks/PracticeAreaHero';
// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/router';
import { useParams, usePathname } from 'next/navigation';
import PracticeModule from '@/components/practice-areas/practice-module/PracticeModule';

export async function generateStaticParams() {
  const paths = practices.map(p => ({
    params: { practice: slugify(p.name).toLowerCase() }
  }));
  
  return {
    paths,
    fallback: false, 
  };
}



const PracticeAreaPage: React.FC = () => {

  
  
  
  return (
    <div
    className={styles.pageWrapper}
    >

      <PracticeAreaHero />
      <PracticeModule />


    </div>
  )
}

export default PracticeAreaPage