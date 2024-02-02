import styles from './Header.module.css'
export const Navigation = () => {
    const pages = ['Appliance Service','Brands','Maintance Plans','Coupons','Reviews','About','Contact']
    return (
        <nav className={styles.navigation}>
            {pages.map(page => (
                <a key={page} href={`/${page.toLowerCase().replace(' ', '-')}`}>
                    {page}
                </a>
            ))}
        </nav>
    );
}