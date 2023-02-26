import React from 'react'
import styles from './servicesGrid.module.css'
import services from './data.json'

const ServicesGrid = () => {
    return (
        <div className={styles.servicesGrid}>
            {services.map((service, index) => {
                return (
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIcon} dangerouslySetInnerHTML={{__html: service.image}}>
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
        </div>
    )
}

export default ServicesGrid