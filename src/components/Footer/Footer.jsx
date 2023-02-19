import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.col1}>
          <Link to="/">
          <p style={{color:'white'}} className={styles.footerCompany + ' '}>PiUS TECH</p>
          </Link>
          <br></br>
          Jai Taramani, E5/15, Bangur Nagar,
          <br></br>
          Goregoan West,
          <br></br>
          Mumbai, Maharashtra 400104,
          <br></br>
          India
        </div>
        <div className={styles.col3}>
          <Link to="/contact">
            <p style={{color: 'black'}}>Contact</p>
          </Link>
          <Link to="/policy">
            <p style={{color: 'black'}}>Website Policy</p>
          </Link>
          <Link to="/policy">
            <p style={{color: 'black'}}>Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <p>Disclaimer: We have no affiliation with Amazon, Fulfillment by Amazon (FBA) or its affiliates and partners, including but not limited to; Amazon.in, Amazon.ca, Amazon.uk, Amazon.fr and Amazon.cn, Walmart, eBay, etsy.  Trademarks of these companies are their owners.</p>
      </div>
    </div>
  )
}

export default Footer