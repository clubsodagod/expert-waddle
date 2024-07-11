import React from 'react'
import styles from '../module-controller.module.css'
import { Button } from '@mui/material';


const DynamicModuleButton: React.FC<{
    label:string,
    handleModuleController:(label:string)=>void,
}> = ({label, handleModuleController}) => {

  return (
   <div
   className={styles.moduleBtnWrapper}
   onClick={()=>{handleModuleController(label)}}
   >

        <Button 
        variant='outlined' 
        className={styles.moduleBtn}
        onClick={()=>{handleModuleController(label)}}
        >
            {label}
        </Button>
   </div>
  )
}



export default DynamicModuleButton;