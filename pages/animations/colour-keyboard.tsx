/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'

const CustomBackgroundCss = createGlobalStyle`
  .keyboard {
    --radius: 6vmin;
    --red: #ef0242;
    --green: #64c864;
    --blue: #6363ff;
    background-color: #0a0a0a;
    padding: 2vmin;
    border-radius: var(--radius);
    box-shadow: 0 1.2vmin #0b0b0b, -1vmin 1.1vmin 1.5vmin #0a0a0a;
    position: relative;
    box-sizing: border-box;
  }

  .keyboard::before {
    content: '';
    height: 100vh;
    width: 0.5vw;
    bottom: 100%;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    background: linear-gradient(to left, #111, #222, #111, #111);
    box-shadow: -0.4vmin 0 1vmin #111;
    z-index: -1;
  }

  .keyboard .keyboard-inner {
    display: flex;
    gap: 1vmin;
    justify-content: center;
  }

  .keyboard .keyboard-inner .key {
    --delay: 0;
    width: 10vmin;
    height: 9vmin;
    position: relative;
    border-radius: calc(var(--radius) * 0.5);
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--blue);
    color: var(--red);
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .keyboard .keyboard-inner .key:hover {
    border: 3px solid var(--blue);
    font-size: 1.3rem;
    border-radius: calc(var(--radius) * 0.6);
  }

  .key:nth-child(1n + 1) {
    --delay: 0.2s;
    animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
  }
  .key:nth-child(1n + 1) .key-content {
    animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
  }
  .key:nth-child(1n + 2) {
    --delay: 0.4s;
    animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
  }
`

const ColourKeyboard = () => {
  return (
    <div>
      <CustomBackgroundCss />
      <div
        className="items-center m-5"
      >
        <div className='keyboard'>
          <div className='keyboard-inner'>
            <div className='key'>
              <div className='key-content'>Ctrl</div>
            </div>
            <div className='key'>
              <div className='key-content'>C</div>
            </div>
            <div className='key'>
              <div className='key-content'>V</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColourKeyboard
