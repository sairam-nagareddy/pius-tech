import React, { useEffect, useState } from 'react'
import styles from './Numbers.module.css'

const Numbers = () => {
    useEffect(() => {

    }, [])

    return (
        <div className={styles.NumberSection}>
            <div className={styles.Number}>
                <span className={styles.NumberValue}>500%</span>
                <span className={styles.NumberTag}>Average Profit Increase</span>
            </div>
            <div className={styles.Number}>
                <span className={styles.NumberValue}>3</span>
                <span className={styles.NumberTag}>Awards Received</span>
            </div>
            <div className={styles.Number}>
                <span className={styles.NumberValue}>$50 M</span>
                <span className={styles.NumberTag}>Annual Revenue Managed</span>
            </div>
            <div className={styles.Number}>
                <span className={styles.NumberValue}>5</span>
                <span className={styles.NumberTag}>Certifications</span>
            </div>
        </div>
    )
}

export default Numbers