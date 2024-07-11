import React from 'react'
import AttorneyHero from './building-blocks/AttorneyHero'
import { Attorney } from '@/public/page-data'

const AttorneyView: React.FC<{attorney: Attorney}> = ({attorney}) => {
  return (
    <div>

      <AttorneyHero attorney={attorney} />
    </div>
  )
}

export default AttorneyView