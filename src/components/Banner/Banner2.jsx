import styles from './Banner2.module.css'
import React from 'react'

const Banner2 = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTitle}>
                    <span>Complete the <span style={{ whiteSpace: 'nowrap' }}>E-Commerce</span> Circle with </span><span className='bold' style={{ color: "orange" }}>us.</span>
                </div>
                <div className={styles.bannerSubText}>
                    <p>Marketplace management with warehouse partners
                        across the globe. <br></br>
                        We care deeply about the success of your business on various marketplaces.
                    </p>
                </div>
                <div className={styles.bannerCTA}>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Banner2