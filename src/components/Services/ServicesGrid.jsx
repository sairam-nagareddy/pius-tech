import React from 'react'
import styles from './servicesGrid.module.css'
import services from './data.json'
import { motion } from 'framer-motion'

const ServicesGrid = () => {
    return (
        <div className={styles.servicesSection}>
            <div className={styles.sectionTitle}>
                <span>What we do</span>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => {
                    return (
                        <motion.div 
                            className={styles.serviceItem}
                            whileInView={{ x: [-35, 0], opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2}}
                            >
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
                        </motion.div>
                    )
                })}
            </div>
            <div className={styles.servicesTagline} style={{padding: '20px'}}>
                <p style={{textAlign:'center'}}>That's not all. We can help you build your own Website and Mobile App.</p>
            </div>
        </div>
    )
}

export default ServicesGrid