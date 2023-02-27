// import nichem from '../../assets/nichem.jpg'
// import bigBrandsLogo from '../../assets/big-brands-logo.jpg'
// import craftmix from '../../assets/craftmix-logo.jpg'
import allocacoc from '../../assets/allocacoc.png'
import alphavedic from '../../assets/Alphavedic.png'
import sleepy from '../../assets/Sleepy.png'
import bambooIndia from '../../assets/Bamboo India.png'
import biwbiw from '../../assets/Biw Biw.png'
import boros from '../../assets/Boros.jpg'
import burtsBees from "../../assets/Burt's Bees.png"
import mnm from '../../assets/M & M.jpg'
import tanmatra from '../../assets/Tanmatra.PNG'
import tommeeTippee from '../../assets/Tommee Tippee.png'
import ellas from '../../assets/ellas.png'
import gaia from '../../assets/gaia.png'
import gerber from '../../assets/gerber.png'
// import heinz from '../../assets/heinz.png'
// import polmarex from '../../assets/polmarex.png'
import primaVictory from '../../assets/Prima-Victory.jpg'
// import skinStory from '../../assets/skinstory.jpeg'
import universeArchery from '../../assets/universe-archery.png'
// import wellTold from '../../assets/well-told.jpg'
import bareSutra from '../../assets/baresutra.png'
import tanawade from '../../assets/tanawade-better.jpg'
import aravi from '../../assets/aravi.jpg'
import ardour from '../../assets/ardour.png'
import bar from '../../assets/Bar.png'
import bargain from '../../assets/bargain.png'
import teos from '../../assets/teos.png'
import sudocrem from '../../assets/sudocrem.png'
import React from 'react'
import styles from './Brands.module.css'
import { motion } from 'framer-motion'

const Brands = () => {
    return (
        <div className={styles.brandsContainer}>
            <div className={`titleText ${styles.brandsTitle}`}>
                <span>Brands We Have Managed</span>
            </div>
            <motion.div 
                className={styles.brands}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3, type: 'easeInOut' }}
                >
                <img className={styles.brandImage} src={tanmatra}></img>
                <img className={styles.brandImage} src={tommeeTippee}></img>
                <img className={styles.brandImage} src={ellas}></img>
                <img className={styles.brandImage} src={gaia}></img>
                <img className={styles.brandImage} src={gerber}></img>
                <img className={styles.brandImage} src={universeArchery}></img>
                <img className={styles.brandImage} src={biwbiw}></img>
                <img className={styles.brandImage} src={primaVictory}></img>
                <img className={styles.brandImage} src={bambooIndia}></img>
                <img className={styles.brandImage} src={burtsBees}></img>
                <img className={styles.brandImage} src={sleepy}></img>
                <img className={styles.brandImage} src={alphavedic}></img>
                <img className={styles.brandImage} src={allocacoc}></img>
                <img className={styles.brandImage} src={bareSutra}></img>
                <img className={styles.brandImage} src={tanawade}></img>
                <img className={styles.brandImage} src={boros}></img>
                <img className={styles.brandImage} src={mnm}></img>
                <img className={styles.brandImage} src={aravi}></img>
                <img className={styles.brandImage} src={ardour}></img>
                <img className={styles.brandImage} src={bar}></img>
                <img className={styles.brandImage} src={bargain}></img>
                <img className={styles.brandImage} src={sudocrem}></img>
                <img className={styles.brandImage} src={teos}></img>
            </motion.div>
        </div>
    )
}

export default Brands;
