import styles from './Footer.module.css'
import sprite from '../../img/sprite.svg'
export const SocialMediaList = () => {
    const medias = ['youtube','facebook','pinterest','instagram']
    return (
        <div>
            <ul className={styles.listSocialMedia}>
                {medias.map(item => (<li key={item} className={styles.listItemMedia}><a href="http://">
                <svg aria-hidden="true" width='18' height='18'>
                        <use href={`${sprite}#icon-${item}`} />
                </svg>
                </a></li>))}
            </ul>
        </div>
    )
}