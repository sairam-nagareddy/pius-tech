import React from 'react'
import style from './Strengths.module.css'

const Strengths = () => {
  return (
    <div className={style.strengthContainer}>
      <div className={style.titleContainer}>
        <span className='titleText'>We will complete the E-Commerce circle with you.</span>
      </div>
      <div className={style.container}>
        <div className={`${style.circle} ${style.circle1}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Support</span>
        </div>
        <div className={`${style.circle} ${style.circle2}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Speed</span>
        </div>
        <div className={`${style.circle} ${style.circle3}`}>
          <span className={`${style.strengthSpan}` + ' commonText'}>Expertise</span>
        </div>
      </div>
    </div>
  )
}

export default Strengths