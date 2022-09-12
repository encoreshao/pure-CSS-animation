/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/block-revealing-effect.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  html, body { height: 100%; }
  body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    min-height: 100vh;
    padding: 20px;

    background: linear-gradient(45deg, #467897, #e7cd79);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  #blockEffect {
    --td: 1.2s;
  }

  #blockReveal1 {
    --bc: #4040bf;
    --d: .1s
  }

  #blockReveal2 {
    --bc: #bf4060;
    --d: .5s
  }
`

const BlockRevealingEffect = () => {
  return (
    <div className={styles.blockRevealingEffect}>
      <CustomBackgroundCss />
      <h1 id="blockEffect" className={styles.blockEffect}>
        <div id="blockReveal1" className={styles.blockReveal}>Encore S.</div>
        <div id="blockReveal2" className={styles.blockReveal}>Software Engineer</div>
      </h1>
    </div>
  )
}

export default BlockRevealingEffect
