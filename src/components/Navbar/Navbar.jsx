import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img style={{width: '100%'}} src={logo}></img>
      </div>
      <button className='CTA'>
        book a meeting
      </button>
    </div>
  )
}

export default Navbar