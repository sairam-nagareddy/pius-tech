import nichem from '../../assets/nichem.jpg'
import bigBrandsLogo from '../../assets/big-brands-logo.jpg'
import craftmix from '../../assets/craftmix-logo.jpg'
import ellas from '../../assets/ellas.png'
import gaia from '../../assets/gaia.png'
import gerber from '../../assets/gerber.png'
import heinz from '../../assets/heinz.png'
import polmarex from '../../assets/polmarex.png'
import primaVictory from '../../assets/Prima-Victory.jpg'
import skinStory from '../../assets/skinstory.jpeg'
import universeArchery from '../../assets/universe-archery.png'
import wellTold from '../../assets/well-told.jpg'
import React from 'react'
import styles from './Brands.module.css'

const Brands = () => {
    return (
        <div className={styles.brandsContainer}>
            <div className={`titleText ${styles.brandsTitle}`}>
                <span>Brands We Manage</span>
            </div>
            <div className={styles.brands}>
                <img className={styles.brandImage} src={nichem}></img>
                <img className={styles.brandImage} src={bigBrandsLogo}></img>
                <img className={styles.brandImage} src={craftmix}></img>
                <img className={styles.brandImage} src={ellas}></img>
                <img className={styles.brandImage} src={gaia}></img>
                <img className={styles.brandImage} src={gerber}></img>
                <img className={styles.brandImage} src={heinz}></img>
                <img className={styles.brandImage} src={polmarex}></img>
                <img className={styles.brandImage} src={primaVictory}></img>
                <img className={styles.brandImage} src={skinStory}></img>
                <img className={styles.brandImage} src={universeArchery}></img>
                <img className={styles.brandImage} src={wellTold}></img>
            </div>
        </div>
    )
}

export default Brands;
