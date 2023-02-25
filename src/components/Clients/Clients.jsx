import React from 'react'
import styles from './Clients.module.css'
import amazon from '../../assets/amazoncolor.png'
import ebay from '../../assets/ebaycolor.png'
import walmart from '../../assets/walmartcolor.png'
import etsy from '../../assets/etsycolor.png'
import meesho from '../../assets/meesho.png'
import jiomart from '../../assets/jiomart.png'
import nykaa from '../../assets/nykaa.png'
import firstCry from '../../assets/firstcry.png'
import tatacliq from '../../assets/tatacliq.png'
import moglix from '../../assets/moglix.png'
import healthkart from '../../assets/healthkart.png'

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <div className={styles.amazon + ' ' + styles.client}>
        <img className={styles.clientImg} src={amazon} alt="" />
      </div>
      <div className={styles.ebay + ' ' + styles.client}>
        <img className={styles.clientImg} src={ebay} alt="" />
      </div>
      <div className={styles.walmart + ' ' + styles.client}>
        <img className={styles.clientImg} src={walmart} alt="" />
      </div>
      <div className={styles.etsy + ' ' + styles.client}>
        <img className={styles.clientImg} src={etsy} alt="" />
      </div>
      <div className={styles.meesho + ' ' + styles.client}>
        <img className={styles.clientImg} src={meesho} alt="" />
      </div>
      <div className={styles.jiomart + ' ' + styles.client}>
        <img className={styles.clientImg} src={jiomart} alt="" />
      </div>
      <div className={styles.nykaa + ' ' + styles.client}>
        <img className={styles.clientImg} src={nykaa} alt="" />
      </div>
      <div className={styles.firstCry + ' ' + styles.client}>
        <img className={styles.clientImg} src={firstCry} alt="" />
      </div>
      <div className={styles.tatacliq + ' ' + styles.client}>
        <img className={styles.clientImg} src={tatacliq} alt="" />
      </div>
      <div className={styles.moglix + ' ' + styles.client}>
        <img className={styles.clientImg} src={moglix} alt="" />
      </div>
      <div className={styles.healthkart + ' ' + styles.client}>
        <img className={styles.clientImg} src={healthkart} alt="" />
      </div>
    </div>
  )
}

export default Clients