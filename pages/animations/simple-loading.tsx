/* eslint-disable react/jsx-key */
import { createGlobalStyle } from 'styled-components'
import styles from '../../styles/animations/simple-loading.module.scss';

const CustomBackgroundCss = createGlobalStyle`
  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 51;
  }
`

const SimpleLoading = () => {
  return (
    <div>
      <CustomBackgroundCss />
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className={`${styles.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4`}></div>
        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>
    </div>
  )
}

export default SimpleLoading
