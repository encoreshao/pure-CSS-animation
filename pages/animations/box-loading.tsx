/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'

const CustomBackgroundCss = createGlobalStyle`
  @keyframes rotate {
    50%, 100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-item {
    25%, 50% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .loading {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 1rem;
    border: 5px solid #131832;
    overflow: hidden;
    animation: rotate 3s ease infinite;
  }

  .loading::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 180px;
    height: 180px;
    background-color: rgb(19 110 185);
    transform-origin: center bottom;
    sransform: scaleY(1);
    animation: rotate-item 3s linear infinite;
  }
`

const BoxLoading = () => {
  return (
    <div>
      <CustomBackgroundCss />
      <div
        className="h-screen flex items-center justify-center"
      >
        <div className='loading'>
        </div>
        <div className='loading'>
        </div>
        <div className='loading'>
        </div>
        <div className='loading'>
        </div>
      </div>
    </div>
  )
}

export default BoxLoading
