import React, { useState } from 'react'
import style from './Services.module.css'
import NavigationDots from '../Navbar/NavigationDots'

const Services = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.servicesContainer}>
      <div className={style.infoContainer}>
        <div className={style.servicesSubtitle}>
          <span className={style.servicesSubtitleText}>Marketplace Strategy</span>
        </div>
        <p className={style.servicesInfo}>
          We get to know your business so that we can suggest the best Amazon business model for you. If you’re already selling on Amazon, we’ll let you know if it makes sense to change course to a different business model or maintain course with your current one.
        </p>
      </div>
      <div className='navigation'>
        <NavigationDots active={isActive}/>
      </div>
    </div>
  )
}

export default Services