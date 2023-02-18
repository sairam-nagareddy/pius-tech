import React from 'react'
import styles from './Banner.module.css'
import buddha from '../../assets/buddha2.png'

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                <img src={buddha} className={styles.buddha}></img>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerTitle}>
                        <span>Complete the E-Commerce <br></br> Circle with </span><span className='bold'>us.</span>
                    </div>
                    <p className={styles.bannerText}>Marketplace management with warehouse partners<br></br>
                        across the globe. <br></br>
                        We care deeply about the success of your business on <br></br>various marketplaces.
                    </p>
                    <div className={styles.joinUsBtn + ' CTA'}>Join us</div>
                </div>
            </div>
        </div>
    )
}
export default Banner
