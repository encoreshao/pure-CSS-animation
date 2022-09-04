/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/waves.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  html, body { height: 100%; }
  body {
    background: radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
    overflow: hidden;
  }
`

const Waves = () => {
  return (
    <div className={styles.main}>
      <CustomBackgroundCss />
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  )
}

export default Waves
