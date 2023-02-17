import React from 'react'
import styles from './Banner.module.css'
import buddha from '../../assets/buddha2.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={buddha} className={styles.buddha}></img>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTitle}>
                <span className={'titleText'}>Complete the E-Commerce Circle with </span><span className='titleText bold'>us.</span>
                </div>
                <p className={styles.bannerText + ' commonText'}>Marketplace management with warehouse partners<br></br>
                    across the globe. <br></br>
                    We care deeply about the success of your business on <br></br>various marketplaces.
                </p>
                <button className='CTA' style={{position:'relative', top:'100px'}}>Join us</button>
            </div>
        </div>
    )
}
export default Banner
