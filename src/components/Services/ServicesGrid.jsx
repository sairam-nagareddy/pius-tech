import React from 'react'
import styles from './servicesGrid.module.css'
import services from './data.json'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'
import lightbulb from '../../assets/lightbulb.png'

const ServicesGrid = () => {
    const motionVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.2, delay: 0.2 },
        },
    };
    return (
        <div className={styles.servicesSection}>
            <div className={styles.sectionTitle}>
                <span>What we do</span>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => {
                    return (
                        <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <motion.div 
                                className={styles.serviceItem}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                variants={motionVariants}
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
                        )}
                        </VisibilitySensor>
                    )
                })}
            </div>
            <div className={styles.servicesTagline} style={{padding: '20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{width:'25px', marginRight:'10px'}} src={lightbulb}></img>
                <p>That's not all. We can help you build your own Website and Mobile App.</p>
            </div>
        </div>
    )
}

export default ServicesGrid