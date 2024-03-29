/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unknown-property */

import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <>
      <nav className="bg-sky-900 px-2 py-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <div className="container flex flex-wrap justify-between items-center mx-auto">

          <a href="/" className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/745929?v=4"
              className="mr-3 h-5 sm:h-8 rounded"
              alt="Encore S.">
            </img>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Encore S.</span>
          </a>

          <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="text-white flex flex-col p-4 mt-4 bg-sky-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-sky-800 md:dark:bg-sky-900 dark:border-sky-700">
              <li>
                <Link href='/' className="font-bold text-sm whitespace-nowrap uppercase">
                  {`Home`}
                </Link>
              </li>
              <li>
                <Link href={`/animations`} className="font-bold text-sm whitespace-nowrap uppercase">
                  CSS Animations Examples
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
