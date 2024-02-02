
import styles from './Footer.module.css'
export const ListFooter = ({ title, items }) => {
    return (
        <div>
            <h3 className={styles.listTitle}>{title}</h3>
            <ul className={styles.list}>
                {items.map(item=>( <li key={item} className={styles.listItem}><a href="http://">{item}</a></li>))}
            </ul>
        </div>
    )
}