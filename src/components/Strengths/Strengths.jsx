import React from 'react'
import style from './Strengths.module.css'
import { motion } from 'framer-motion'

const Strengths = () => {
  return (
    <div className={style.strengthContainer}>
      <div className={style.titleContainer}>
        <span className={`${style.strengthTitle}` +' titleText'}>We will complete the E-Commerce circle with you.</span>
      </div>
      <motion.div 
        className={style.container}        
        >
        <motion.div 
          className={`${style.circle} ${style.circle1}`}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
          }}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Support</span>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle2}`}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
          }}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Speed</span>
        </motion.div>
        <motion.div 
          className={`${style.circle} ${style.circle3}`}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
          }}
          transition={{ duration: 0.5, type: 'easeInOut' }}
          >
          <span className={`${style.strengthSpan}`}>Expertise</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Strengths