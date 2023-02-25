import React from 'react'
import style from './Strengths.module.css'
import { motion } from 'framer-motion'

const Strengths = () => {
  return (
    <div className={style.strengthContainer}>
      <div className={style.titleContainer}>
        <span className={`${style.strengthTitle}`}>We will complete the E-Commerce circle with you.</span>
      </div>
      <motion.div 
        className={style.container}        
        >
        <motion.div 
          className={`${style.circle} ${style.circle1}`}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Support</span>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle2}`}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Speed</span>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle3}`}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Expertise</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Strengths