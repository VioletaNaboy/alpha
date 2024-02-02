import styles from './Header.module.css'
import sprite from '../../img/sprite.svg'
export const Button= () => {
    return (
        <button className={styles.btn}type="button">
            <svg class="icon" aria-hidden="true" width='18' height='18'>
                <use href={`${sprite}#icon-setting-1`} />
            </svg>
            <span>Book online</span>
            </button>
    )
}