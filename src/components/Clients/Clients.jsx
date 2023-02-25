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

const marketplaces = [
  amazon, ebay, walmart, etsy, meesho, jiomart, nykaa, firstCry, tatacliq, moglix, healthkart
]

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <div className={styles.miniContainer}>
        <div className={styles.mapping}>
          {marketplaces.map((src, index) => {
            return (
              <div key={'1' + src + index} className={styles.client}>
                <img className={styles.clientImg} src={src} alt="" />
              </div>
            )
          })}
          {/* Second Mapping */}
          {marketplaces.map((src, index) => {
            return (
              <div key={src + index} className={styles.client}>
                <img className={styles.clientImg} src={src} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Clients