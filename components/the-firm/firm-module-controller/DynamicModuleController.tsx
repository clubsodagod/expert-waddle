import React from 'react'
import styles from './module-controller.module.css'
import { DynamicScrollCtn } from '@/components';
import { firmPage, FirmPage } from '@/public/page-data';
import DynamicModuleButton from './building-blocks/ModuleButton';



const DynamicFirmModuleController: React.FC<{
  handleModuleController:(label:string)=>void,
}> = ({
  handleModuleController
}) => {

  const buttons = firmPage.moduleButtons!;


  return (
    <div
    className={styles.firmModuleWrapper}
    >
      <DynamicScrollCtn
      type={2}
      >
          {
            buttons.map((b,i) => (
              <DynamicModuleButton key={`${b.label} ${i}`} handleModuleController={handleModuleController} label={b.label} />
            ))
          }
      </DynamicScrollCtn>      
    </div>

  )
}



export default DynamicFirmModuleController;