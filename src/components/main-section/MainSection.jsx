import sprite from '../../img/sprite.svg'
import styles from './MainSection.module.css'
import { Button } from './Button'
import { Image } from './Image'

export const MainSection = () => {
  const listOfAppliace =['Repair of any complexity of all brands of equipment','Affordable rates for various appliance repairs','Licensed, trained techs with years of experience','Same/next-day appointment']
    return (
        <section className={styles.mainSection}>
            <div>
                <h1 className={styles.title}>Appliance Repair Service</h1>
        <h2 className={styles.subtitle}>Your Local Appliance Repair Company</h2>
        <ul className={styles.list}>
           {listOfAppliace.map(
               item=>(<li key={item} className={styles.listItem}>
                       <svg fill='#485982' aria-hidden="true" width='18' height='18'>
                        <use href={`${sprite}#icon-ok`} />
                        </svg>
                   <p>{item}</p>
               </li>)
           )}     
                </ul>
               <Button/>
            </div>
            <Image/>
        
            </section>
    )
}