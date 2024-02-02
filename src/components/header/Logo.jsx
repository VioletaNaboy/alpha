import sprite from '../../img/sprite.svg'
import styles from './Header.module.css'


export const Logo = () => {
    return (
            <div className={styles.logo}>
                <svg class="icon" aria-hidden="true" width='27.6' height='27.6'>
                    <use href={`${sprite}#icon-setting-2`} />
            </svg>
            <div className={styles.textLogo}>
                <span>Alpha</span>
                <span>Appliance repair</span>
            </div>
                
            </div>  
    )
}