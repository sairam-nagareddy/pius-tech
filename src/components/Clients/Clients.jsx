import React from 'react'
import styles from './Clients.module.css'
import amazon from '../../assets/amazon.png'
import ebay from '../../assets/Ebay.png'
import walmart from '../../assets/Walmart.png'
import etsy from '../../assets/Etsy.png'

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <div className={styles.amazon + ' ' + styles.client}>
        <img style={{width:'100%'}} src={amazon} alt="" />
      </div>
      <div className={styles.ebay + ' ' + styles.client}>
        <img style={{width:'100%'}} src={ebay} alt="" />
      </div>
      <div className={styles.walmart + ' ' + styles.client}>
        <img style={{width:'100%'}} src={walmart} alt="" />
      </div>
      <div className={styles.etsy + ' ' + styles.client}>
        <img style={{width:'100%'}} src={etsy} alt="" />
      </div>
    </div>
  )
}

export default Clients