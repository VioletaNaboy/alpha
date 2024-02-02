import { Logo } from '../header/Logo'
import { Phone } from '../header/Phone'
import { ListFooter } from './ListFooter'
import { Button } from '../header/Button'
import { SocialMediaList } from './SocialMediaList'
import styles from './Footer.module.css'
export const Footer = () => {
    const menu = {
        'about company': ['Maintance Plans', 'Coupons', 'Review', 'FAQ', 'Blog', 'Contact'],
        'customer services': ['Residential', 'Commercial', 'Repair', 'Installation'],
        'help and support': ['Appliance Repair Warranty','Cancellation Policy','Privacy Policy','Careers']
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
              <div className={styles.firstColumnFooter}>
                    <Logo />
                    <div className={ styles.phone}>
                        <Phone />
                    </div>
                    <p className={styles.address}>Unit 4, 5267 Explorer drive, <br/>
Toronto, On L4W 4T7</p>
                    <a className={styles.email} href="mailto:info@appliancerepairexpert.ca">info@appliancerepairexpert.ca</a>
                    <Button/>
                </div>
                <div className={styles.wrapper}>
                    <ListFooter items={menu['about company']} title="about company" />
                <ListFooter items={menu['customer services']} title="customer services" />
                <div className={styles.lastColumnFooter}>
                        <ListFooter items={menu['help and support']} title="help and support" />
                        <SocialMediaList/>
                </div>
                </div>
                
               <span class={styles.rights}>All rights reserved © 2005-2021</span>
           </div>
        </footer>
    )
}