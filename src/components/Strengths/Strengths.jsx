import React, { useState } from 'react'
import style from './Strengths.module.css'
import { motion } from 'framer-motion'

const Strengths = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={style.strengthContainer}>
      <div className={style.titleContainer}>
        <span className={`${style.strengthTitle}`}>We will complete the E-Commerce circle with you.</span>
      </div>
      <div className={style.container}>
        <motion.div 
          className={`${style.circle} ${style.circle1}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 1 }}
          onViewportEnter={() => setIsVisible(true)}
          // onViewportLeave={() => setIsVisible(false)}
          >
          <div className={style.supportContainer}>
            <div className={`${style.strengthSpan}`}>Support</div>
            <div className={style.textContainer}>
              <span>Our clients receive comprehensive support on all topics regarding Amazon & other marketplace. We're in constant communication with our clients via email, phone and web-conferencing. PiUS TECH integrates services seamlessly into our clients’ business by working hand in hand with their internal employees.</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle2}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 1 }}
          onViewportEnter={() => setIsVisible(true)}
          // onViewportLeave={() => setIsVisible(false)}
          >
          <div className={style.speedContainer}>
            <div className={`${style.strengthSpan}`}>Speed</div>
            <div className={style.textContainer}>
              <span>Whether you're entering the marketplace or a veteran seller on Amazon, PiUS TECH gets your seller account up to speed fast. Clients are fully on-boarded, listed appropriately and advertising on the marketplace.</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle3}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 1 }}
          onViewportEnter={() => setIsVisible(true)}
          onViewportLeave={() => setIsVisible(false)}
          >
          <div className={style.expertiseContainer}>
            <div className={`${style.strengthSpan}`}>Expertise</div>
            <div className={style.textContainer}>
              <span>We have worked with a wide breadth of businesses and sales models including Vendor Central and Seller Central (FBA/Merchant Fulfilled). We understand the pros and cons of these business models thoroughly. We help our clients accelerate in their current business model, pivot into a new one or operate hybrid models.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Strengths