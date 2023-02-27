import React, { useEffect, useState } from 'react'
import styles from './Numbers.module.css'
import CountUp from 'react-countup'

const Numbers = () => {
    useEffect(() => {

    }, [])

    return (
        <div className={styles.NumberSection}>
            <div className={styles.Number}>
                {/* <span className={styles.NumberValue}>500%</span> */}
                <div className={styles.countContainer}>
                    <CountUp className={styles.NumberValue} end={300}></CountUp><span className={styles.NumberValue}>%</span>
                </div>
                <span className={styles.NumberTag}>Average Turnover Increase</span>
            </div>
            <div className={styles.Number}>
                <CountUp className={styles.NumberValue} end={3} duration={1}></CountUp>
                <span className={styles.NumberTag}>Accolades Received</span>
            </div>
            <div className={styles.Number}>
                <div className={styles.countContainer}>
                    <span className={styles.NumberValue}>$</span><CountUp className={styles.NumberValue} end={100}></CountUp><span className={styles.NumberValue}>M</span>
                </div>
                <span className={styles.NumberTag}>Annual Revenue Managed</span>
            </div>
            <div className={styles.Number}>
                <CountUp className={styles.NumberValue} end={5} duration={1}></CountUp>
                <span className={styles.NumberTag}>Certifications</span>
            </div>
        </div>
    )
}

export default Numbers