import styles from './MainSection.module.css'
import sprite from '../../img/sprite.svg'
export const Button= () => {
    return (
        <button className={styles.btn}type="button">
            <svg class="icon" aria-hidden="true" width='18' height='18'>
                <use href={`${sprite}#icon-phone`} />
            </svg>
            <span>Request a call</span>
            </button>
    )
}