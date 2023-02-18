import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img style={{width: '100%'}} src={logo}></img>
      </div>
      <div className={styles.meetingBtn}>
        <div className={styles.buttonInnerText}>
          <div>book a meeting</div>
          <div style={{position:'relative', top:'10px'}}>book a meeting</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar