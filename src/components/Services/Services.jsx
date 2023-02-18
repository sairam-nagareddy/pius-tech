import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import serviceData from './data.json'
import { motion } from 'framer-motion';

const Services = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)
  let id


  const activateIndex = (index) => {
    setActiveIndex(index)
    clearInterval(id)
  }

  useEffect(() => {
    id = setInterval(() => setActiveIndex((value) => value !== 4 ? value + 1 : 0), 7000);
    return () => {
      clearInterval(id);
    };
  }, [])

  return (
    <div className={style.servicesContainer}>
      {/*  */}
      <div className={style.infoContainer}>
        <div className={style.servicesSubtitle + ` show${activeIndex}`}>
          <span className={style.servicesSubtitleText}>{serviceData[activeIndex].title}</span>
        </div>
        <p className={style.servicesInfo + ` show${activeIndex}`}>
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