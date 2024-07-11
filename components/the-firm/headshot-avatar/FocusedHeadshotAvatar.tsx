import React from 'react'
import styles from './styles/headshot-avatar.module.css'
import { Avatar } from '@mui/material'
import { Attorney } from '@/public/page-data'
import HeadshotBanner from './building-blocks/HeadshotBanner'


const FocusedHeadshotAvatar: React.FC<{attorney:Attorney, index:number}> = ({attorney, index}) => {
  
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
   className={styles.focusedHeadshotAvatarWrapper}
   >
        <Avatar
        className={styles.focusedHeadshotAvatar}
        alt='sample alt'
        sx={{ width: 150, height: "31vh" , borderRadius: "10px", color:"pink", objectFit:"cover"}}
        variant='square'
        src={photo}
        />
        <div>
            <HeadshotBanner data={attorney} index={index} />
        </div>
      
   </div>
  )

}



export default FocusedHeadshotAvatar;