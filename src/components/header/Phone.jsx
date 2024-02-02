import styles from './Header.module.css'
import sprite from '../../img/sprite.svg'

export const Phone = () => {
    return (
      <div className={styles.phone}>
                    <svg  aria-hidden="true" width='18' height='18'>
                        <use href={`${sprite}#icon-phone`} />
                </svg>
                    <a href="tel:+12263700170">+1226-370-0170</a>
                </div>  
    )
}