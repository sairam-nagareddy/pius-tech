import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import serviceData from './data.json'
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const Services = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  let id;


  const activateIndex = (index) => {
    setActiveIndex(index)
    clearInterval(id)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
  });

  const handleSwipe = (delta) => {
    const newIndex = activeIndex + delta;
  
    if (newIndex >= 0 && newIndex < serviceData.length) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    id = setInterval(() => setActiveIndex((value) => value !== 8 ? value + 1 : 0), 7000);
    return () => {
      clearInterval(id);
    };
  }, [])

  return (
    <div 
      className={style.servicesContainer}
      >
      {/*  */}
      <div 
        className={style.infoContainer}
        {...swipeHandlers}
        >
        <div className={style.servicesSubtitle + ` show${activeIndex}`}>
          <div dangerouslySetInnerHTML={{__html: serviceData[activeIndex].image}} className={style.imgContainer}>
          </div>
          <div>
            <span className={style.firstWordTitle}>{serviceData[activeIndex].title.split(' ')[0] + ' '}</span><span className={style.servicesSubtitleText}>{serviceData[activeIndex].title.split(' ').slice(1).join(' ')}</span>
          </div>
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