import React from 'react'
import styles from "../attorney-view.module.css"
import { Attorney } from '@/public/page-data'
import Image from 'next/image'
import { CTA, DynamicAttorneyCTA } from '@/components'
import { Avatar } from '@mui/material'

const AttorneyHero: React.FC<{attorney: Attorney}> = (
    {
        attorney: {
            bio,
            experience,
            name,
            photo,
            specialty,
            video
        }
    }
) => {

    const customLoader = ({ src}: {src:string}) => {
      return src;
    };
  return (
    <div
    className={styles.attorneyHeroWrapper}
    >

        <div
        className={styles.leftHeroColumnWrapper}
        >

            <div
            className={styles.attorneyHeroTextCtn}
            >
                <h1 className={styles.h1}>
                    {name}
                </h1>
                <h2>
                    {specialty}
                </h2>
                <h3>
                    {experience} years
                </h3>
                <p
                className={styles.attorneyHeroTextBio}
                >
                    {bio}
                </p>
            </div>

            <div
            className={styles.attorneyImgCtn}
            >
                <Avatar 
                variant='square' src={photo} className={styles.attorneyImg} alt='' 
                />
            </div>       

        </div>
        
        <div
        className={styles.rightHeroColumnWrapper}
        >
            <DynamicAttorneyCTA />
        
        </div>
        
        

        
    </div>
  )
}

export default AttorneyHero