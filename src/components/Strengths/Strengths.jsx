import React from 'react'
import style from './Strengths.module.css'
import { motion } from 'framer-motion'

const Strengths = () => {
  return (
    <div className={style.strengthContainer}>
      <div className={style.titleContainer}>
        <span className='titleText'>We will complete the E-Commerce circle with you.</span>
      </div>
      <motion.div 
        className={style.container}
        whileInView={{ opacity: 1 }}
        whileHover={{ 
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(255, 255, 255)"
        }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div className={`${style.circle} ${style.circle1}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Support</span>
        </div>
        <div className={`${style.circle} ${style.circle2}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Speed</span>
        </div>
        <div className={`${style.circle} ${style.circle3}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Expertise</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Strengths