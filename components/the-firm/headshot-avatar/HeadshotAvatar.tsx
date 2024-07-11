import { Avatar } from '@mui/material'
import React from 'react'
import HeadshotBanner from './building-blocks/HeadshotBanner'
import styles from "../the-firm-hero/styles/the-firm.module.css"
import { Attorney } from '@/public/page-data'

const HeadshotAvatar: React.FC<{attorney:Attorney, index:number}> = ({attorney, index}) => {
  
  const {
    name,
    id,
    bio,
    photo,
    video,
    experience,
    specialty,
  } = attorney;

  return (
    <div
      className={styles.headshotAvatar} >
      <Avatar
      alt={name}
      sx={{ width: "12.5vw", height:"30vh" , borderRadius: "10px", color:"pink"}}
      variant='square'
      src={photo}
      />
      <div className={styles.headshotBannerCtn}>
        <HeadshotBanner data={attorney} index={index} />
      </div>
      
    </div>
  )
}

export default HeadshotAvatar