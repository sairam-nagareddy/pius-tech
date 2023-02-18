import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import serviceData from './data.json'
import { motion } from 'framer-motion';

const Services = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)


  const activateIndex = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const id = setInterval(() => setActiveIndex((value) => value !== 4 ? value + 1 : 0), 5000);
    return () => {
      clearInterval(id);
    };
  }, [])

  return (
    <div className={style.servicesContainer}>
      {/* <div 
        className={style.infoContainer + ` ${serviceData[activeIndex].title[0]}`}> */}
      <div className={style.infoContainer + ` ${serviceData ? 'show' : null}`}>
        <div className={style.servicesSubtitle}>
          <span className={style.servicesSubtitleText}>{serviceData[activeIndex].title}</span>
        </div>
        <p className={style.servicesInfo}>
          {serviceData[activeIndex].info}
        </p>
      </div>
      <div className='navigation'>
        <div className={style.appNav}>
            {serviceData.map((item, index) => {
              return (
                <div key={index} className={(activeIndex === index) ? style.navDot + ' activeNav' : style.navDot + ' inactiveNav'} onClick={() => activateIndex(index)}>
                  
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Services