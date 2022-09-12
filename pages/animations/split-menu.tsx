/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/split-menu.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  %font-settings {
    font-family: "Gilroy ExtraBold", system-ui, sans-serif;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-font-kerning: normal;
    -webkit-text-size-adjust: 100%;
  }

  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    @extend %font-settings;
    background: linear-gradient(180deg, #c99e8c, #465e65);
    transform-style: preserve-3d;
    transform: perspective($perspective);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
  }
`

const SplitMenu = () => {
  return (
    <div>
      <CustomBackgroundCss />
      <div className={styles.menu}>
        <ul className={styles.menuList} data-offset="10">
          <li className={styles.menuListItem} data-offset="20" onClick={() => window.location.href='/'}>
            Home
            <span className={styles.mask}><span>Home</span></span>
            <span className={styles.mask}><span>Home</span></span>
          </li>
          <li className={styles.menuListItem} data-offset="16" onClick={() => window.location.href='/animations/coffee-machine'}>
            Coffee
            <span className={styles.mask}><span>Coffee</span></span>
            <span className={styles.mask}><span>Coffee</span></span>
          </li>
          <li className={styles.menuListItem} data-offset="12" onClick={() => window.location.href='/animations/block-revealing-effect'}>
            Block
            <span className={styles.mask}><span>Block</span></span>
            <span className={styles.mask}><span>Block</span></span>
          </li>
          <li className={styles.menuListItem} data-offset="8" onClick={() => window.location.href='/'}>
            Contact
            <span className={styles.mask}><span>Contact</span></span>
            <span className={styles.mask}><span>Contact</span></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SplitMenu
