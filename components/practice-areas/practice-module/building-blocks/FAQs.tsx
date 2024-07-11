import React from 'react'
import styles from "../practice-modules.module.css"
import { PracticePage, Precedent, UnorderedItem } from '@/public/page-data'







const FAQs: React.FC<{faqs: UnorderedItem[], index:number}> = ({faqs, index}) => {
  
  

  
  
  return (
    <div>

      <h3>
        Frequent Concerns
      </h3>

      <div className={styles.FAQsExamplesWrapper}>


        <div>

          {
            faqs.map((f:UnorderedItem, i:number) => {
              return (
                <div key={i}>
                  <h5>
                    {f.name}
                  </h5>

                  <p>
                    {f.short}
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

export default FAQs