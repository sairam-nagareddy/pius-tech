import React from 'react'
import styles from './Banner.module.css'
import buddha from '../../assets/bannerImage.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={buddha} className={styles.buddha}></img>
            <div className={styles.bannerContent}>
                <span className='titleText'>Complete the E-Commerce Circle with </span><span className='titleText bold'>us.</span>
                <p>Marketplace management with warehouse partners
                    across the globe. <br></br>
                    We care deeply about the success of your business on various marketplaces.
                </p>
            </div>
        </div>
    )
}
export default Banner
