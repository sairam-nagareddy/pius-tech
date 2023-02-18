import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img style={{width: '100%'}} src={logo}></img>
      </div>
      <div className={styles.meetingBtn + ' CTA'}>
        <div className='buttonInnerText'>
          <div>book a meeting</div>
          {/* <div className='buttonBottomText'>book a meeting</div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar