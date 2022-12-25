/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'

const CustomBackgroundCss = createGlobalStyle`
  :root {
    --width-md: 100px;
    --speed-lx: 1.5s;
    --color-bg: rgb(78, 149, 157);
  }

  .motionblur {
    position: relative;
    width: calc(var(--width-md) * 3);
    height: var(--width-md);
    animation: slide calc(var(--speed-lx) * 1) cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite alternate;
  }

  .box {
    position: absolute;
    left: calc(50% - var(--width-md) / 2);
    width: var(--width-md);
    height: 100%;
    background: var(--color-bg);
    animation: slide calc(var(--speed-lx) * 1) cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite alternate;

    &::before {
      content: '';
      position: absolute;
      width: calc(var(--width-md) * 2);
      height: 100%;
      background: linear-gradient(90deg, rgba(78, 149, 157, 0.5) 50%, rgba(78, 149, 157, 0) 100%);
      transform-origin: 0 0;
      animation: scale calc(var(--speed-lx) * 2) cubic-bezier(0.445, 0.050, 0.550, 0.950) calc(var(--speed-lx) * -1) infinite;
    }

    &::after {
      content: '';
      position: absolute;
      left: calc(var(--width-md) * -1);
      width: calc(var(--width-md) * 2);
      height: 100%;
      background: linear-gradient(90deg, rgba(78, 149, 157, 0) 0%, rgba(78, 149, 157, 0.5) 50%);
      transform-origin: 100% 0;
      animation: scale calc(var(--speed-lx) * 2) cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite;
    }
  }

  @keyframes scale {
    0% { transform: scale3d(0.5, 1, 1); }
    30% { transform: scale3d(1.3, 1, 1); }
    55% { transform: scale3d(0.5, 1, 1); }
    100% { transform: scale3d(0.5, 1, 1); }
  }

  @keyframes slide {
    0% { transform: translate3d(calc(var(--width-md) * -1.5), 0, 0); }
    100% { transform: translate3d(calc(var(--width-md) * 1.5), 0, 0); }
  }
`

const MontionBlur = () => {
  return (
    <>
      <CustomBackgroundCss />
      <div
        className="2xl h-screen flex items-center justify-center"
      >
        <div className='motionblur'>
          <div className='box'>
          </div>
        </div>
      </div>
    </>
  )
}

export default MontionBlur
