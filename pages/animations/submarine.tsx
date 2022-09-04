import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/submarine.module.scss';

const NavAbsoluteCSS = createGlobalStyle`
  nav {
	  z-index: 2;
	  position: absolute;
    width: 100%;
  }
`

const Submarine = () => {
  return (
    <div className={styles.main}>
      <NavAbsoluteCSS />
      <div className={styles.seaContainer}>
        <div className={styles.submarineContainer}>
          <div className={styles.light}></div>
          <div className={styles.submarinePeriscope}></div>
          <div className={styles.submarinePeriscopeGlass}></div>
          <div className={styles.submarineSail}>
            <div className={`${styles.submarineSailShadow} ${styles.dark1}`}>
            </div>
            <div className={`${styles.submarineSailShadow} ${styles.light1}`}></div>
            <div className={`${styles.submarineSailShadow} ${styles.dark2}`}></div>
          </div>
          <div className={styles.submarineBody}>
            <div className={`${styles.submarineWindow} ${styles.one}`}>
            </div>
            <div className={`${styles.submarineWindow} ${styles.two}`}>
            </div>
            <div className={styles.submarineShadowDark}></div>
            <div className={styles.submarineShadowLight}></div>
            <div className={styles.submarineShadowArcLight}></div>
          </div>
          <div className={styles.submarinePropeller}>
            <div className={styles.propellerPerspective}>
            <div className={`${styles.submarinePropellerParts} ${styles.darkOne}`}></div>
            <div className={`${styles.submarinePropellerParts} ${styles.lightOne}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.bubblesContainer}>
          <span className={`${styles.bubbles} ${styles.bubble1}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble2}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble3}`}></span>
          <span className={`${styles.bubbles} ${styles.bubble4}`}></span>
        </div>
        <div className={styles.groundContainer}>
          <div className={`${styles.ground} ${styles.ground1}`}>
            <span className={styles.up1}></span>
            <span className={styles.up2}></span>
            <span className={styles.up3}></span>
            <span className={styles.up4}></span>
            <span className={styles.up5}></span>
            <span className={styles.up6}></span>
            <span className={styles.up7}></span>
            <span className={styles.up8}></span>
            <span className={styles.up9}></span>
            <span className={styles.up10}></span>
          </div>
          <div className={`${styles.ground} ${styles.ground2}`}>
            <span className={styles.up1}></span>
            <span className={styles.up2}></span>
            <span className={styles.up3}></span>
            <span className={styles.up4}></span>
            <span className={styles.up5}></span>
            <span className={styles.up6}></span>
            <span className={styles.up7}></span>
            <span className={styles.up8}></span>
            <span className={styles.up9}></span>
            <span className={styles.up10}></span>
            <span className={styles.up11}></span>
            <span className={styles.up12}></span>
            <span className={styles.up13}></span>
            <span className={styles.up14}></span>
            <span className={styles.up15}></span>
            <span className={styles.up16}></span>
            <span className={styles.up17}></span>
            <span className={styles.up18}></span>
            <span className={styles.up19}></span>
            <span className={styles.up20}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submarine
