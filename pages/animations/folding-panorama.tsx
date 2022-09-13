/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/folding-panorama.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  html {
    background: linear-gradient(0deg, #467897, #e7cd79);
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: crunch $duration $delay ease-in-out infinite;

    @keyframes crunch {
      50% {
        transform: scaleX($crunch);
      }
    }
  }

  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
  }
`

const FoldingPanorama = () => {
  return (
    <div>
      <CustomBackgroundCss />
      <div className={styles.card}>
        <div className={styles.fold}></div>
        <div className={styles.fold}></div>
        <div className={styles.fold}></div>
        <div className={styles.fold}></div>
      </div>
    </div>
  )
}

export default FoldingPanorama
