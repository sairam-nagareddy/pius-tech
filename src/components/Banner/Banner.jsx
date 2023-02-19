import React from 'react'
import styles from './Banner.module.css'
import buddha from '../../assets/buddha2.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    const moveToContact = () => {
        window.scrollTo(0, 2500)
    }

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                <img src={buddha} className={styles.buddha}></img>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerTitle}>
                        <span>Complete the <span style={{whiteSpace:'nowrap'}}>E-Commerce</span> <br></br> Circle with </span><span className='bold' style={{color: "orange"}}>us.</span>
                    </div>
                    <p className={styles.bannerText}>Marketplace management with warehouse partners
                        across the globe. <br></br>
                        We care deeply about the success of your business on various marketplaces.
                    </p>
                    {/* <Link to="#contact"> */}
                    <div onClick={() => moveToContact()} className={styles.joinUsBtn}>
                        <div className={styles.buttonInnerText}>
                            <div>Get Started</div>
                            <div style={{ position: 'relative', top: '10px' }}>Get Started</div>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}
export default Banner
