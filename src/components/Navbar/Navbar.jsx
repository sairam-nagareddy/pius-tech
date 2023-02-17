import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
    </div>
  )
}

export default Navbar