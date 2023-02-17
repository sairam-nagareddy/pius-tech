import React from 'react'
import styles from './Clients.module.css'
import amazon from '../../assets/amazon.png'
import ebay from '../../assets/Ebay.png'
import walmart from '../../assets/Walmart.png'
import etsy from '../../assets/Etsy.png'

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <div>
        <img src={amazon} alt="" />
      </div>
      <div>
        <img src={ebay} alt="" />
      </div>
      <div>
        <img src={walmart} alt="" />
      </div>
      <div>
        <img src={etsy} alt="" />
      </div>
    </div>
  )
}

export default Clients