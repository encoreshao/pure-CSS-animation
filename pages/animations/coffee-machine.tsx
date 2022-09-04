/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/coffee-machine.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  html, body { height: 100%; }
  body {
    background: radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #43beae 100%);
    overflow: hidden;
  }
`

const CoffeeMachine = () => {
  return (
    <div className={styles.coffeeContainer}>
      <CustomBackgroundCss />
      <div className={styles.coffeeHeader}>
        <div className={`${styles.coffeeHeaderButtons} ${styles.coffeeHeaderButtonOne}`}></div>
        <div className={`${styles.coffeeHeaderButtons} ${styles.coffeeHeaderButtonTwo}`}></div>
        <div className={styles.coffeeHeaderDisplay}></div>
        <div className={styles.coffeeHeaderDetails}></div>
      </div>
      <div className={styles.coffeeMedium}>
        <div className={styles.coffeeMediumExit}></div>
        <div className={styles.coffeeMediumArm}></div>
        <div className={styles.coffeeMediumLiquid}></div>
        <div className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeOne}`}></div>
        <div className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeTwo}`}></div>
        <div className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeThree}`}></div>
        <div className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeFour}`}></div>
        <div className={styles.coffeeMediumCup}></div>
      </div>
      <div className={styles.coffeeFooter}></div>
    </div>
  )
}

export default CoffeeMachine
