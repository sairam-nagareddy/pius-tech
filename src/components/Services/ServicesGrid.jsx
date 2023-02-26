import React from 'react'
import styles from './servicesGrid.module.css'
import services from './data.json'
import { motion } from 'framer-motion'

const ServicesGrid = () => {
    return (
        <>
            <div className={styles.sectionTitle}>
                <span>What we do</span>
            </div>
            <motion.div 
                className={styles.servicesGrid}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                >
                {services.map((service, index) => {
                    return (
                        <div className={styles.serviceItem}>
                            <div className={styles.serviceIcon} dangerouslySetInnerHTML={{ __html: service.image }}>
                            </div>
                            <div className={styles.serviceContent}>
                                <div className={styles.serviceTitle}>
                                    <span>{service.title}</span>
                                </div>
                                <div className={styles.serviceText}>
                                    <p>{service.info}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </>
    )
}

export default ServicesGrid