import React from 'react'
import styles from "../practice-modules.module.css"
import { PracticePage, Precedent, UnorderedItem } from '@/public/page-data'


type PrecedentsProps = PracticePage['precedents'] 




const Precedents: React.FC<{precedents: Precedent[], index:number, examples:UnorderedItem[]}> = ({precedents, index, examples}) => {
  
  

  
  
  return (
    <div>

      <h3>
        Historic Cases
      </h3>

      <div className={styles.precedentsExamplesWrapper}>


        <div>

          {
            precedents.map((p: Precedent, i:number) => {
              return (
                <div key={i}>
                  <h5>
                    {p.name}
                  </h5>

                  <p>
                    {p.short}
                  </p>

                  <h5>
                    {p.establishes}
                  </h5>
                </div>                
              )
            })
          }



        </div>

        <div>

          {
            examples.map((e: UnorderedItem, i:number) => {
              return (
                <div key={i}>
                  <h5>
                    {e.name}
                  </h5>

                  <p>
                    {e.short}
                  </p>
                </div>                
              )
            })
          }

        </div>

      </div>



    </div>
  )
}

export default Precedents