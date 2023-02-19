import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
      <div className={styles.logo}>
        <img alt='PiUS TECH Logo' style={{width: '100%'}} src={logo}></img>
      </div>
      </Link>
      <Link to="/contact">
      <div className={styles.meetingBtn}>
        <div className={styles.buttonInnerText}>
          <div>book a meeting</div>
          <div style={{position:'relative', top:'10px'}}>book a meeting</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar