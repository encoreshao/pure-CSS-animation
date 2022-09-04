/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/lighthouse.module.scss';

const AbsoluteCSS = createGlobalStyle`
  nav {
	  z-index: 2;
	  position: absolute;
    width: 100%;
  }

  #main div {
	  position: absolute;
  }
`

const Lighthouse = () => {
  const stars = Array.from({length: 80}, (_, i) => i + 1);
  const fours = Array.from({length: 4}, (_, i) => i + 1);
  const waves = Array.from({length: 30}, (_, i) => i + 1);

  return (
    <div id="main">
      <AbsoluteCSS />
      <div className={styles.scene}>
      <div className={styles.background}>
        <div className={styles.stars}>
          { stars.map((i) => (<div key={`star-${i}`} className={styles.star} /> )) }
        </div>
        <div className={styles.moon}></div>
        <div className={styles.mountains}>
          { fours.map((i) => (<div key={`mountain-${i}`} className={styles.mountain} /> )) }
        </div>
        <div className={styles.sea}>
          { waves.map((i) => (<div key={`wave-${i}`} className={styles.wave} /> )) }
          <div className={styles.boat}>
            <div className={styles.sail}></div>
            <div className={styles.sail}></div>
            <div className={styles.base}></div>
          </div>
          <div className={styles.boat2}>
            <div className={styles.sail}></div>
            <div className={styles.sail}></div>
            <div className={styles.base}></div>
          </div>
        </div>
      </div>
      <div className={styles.lighthouseGroup}>
        <div className={styles.land}></div>
        <div className={styles.lighthouseHolder}>
          <div className={styles.shadow}></div>
          <div className={styles.lighthouse}></div>
          <div className={styles.top}>
            <div className={styles.lightContainer}>
              <div className={styles.light}></div>
            </div>
            <div className={styles.rail}></div>
            <div className={styles.middle}></div>
            <div className={styles.roof}>
              <div className={styles.roofLight}></div>
            </div>
            <div className={styles.glow}></div>
          </div>
          <div className={styles.windows}>
            { fours.map((i) => (<div key={`window-${i}`} className={styles.window} /> )) }
          </div>
          <div className={styles.door}>
            <div className={styles.stairs}></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Lighthouse
