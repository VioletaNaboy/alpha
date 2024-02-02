import { Logo } from "./Logo"
import { Navigation } from "./Navigation";
import { Phone } from "./Phone";
import { Button } from "./Button";
import styles from './Header.module.css'
import sprite from '../../img/sprite.svg'
export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
            <div className={styles.firstRowHeader}>
                <Logo/>
            <div className={styles.searchLabel}>
                <input className={styles.searchInput} type="text" placeholder="Enter City / Postal Code"/>
                <svg className={styles.searchIcon} aria-hidden="true" width='18' height='18'>
                        <use href={`${sprite}#icon-searching`} />
                </svg>
                </div>
                <Phone/>
            </div>
            <div className={styles.secondRowHeader}>
            <Navigation />
                  <Button/>  
                </div>
            </div>
        </header>
    )
}