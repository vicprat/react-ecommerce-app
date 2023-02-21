import { Outlet, Link } from 'react-router-dom'
import crown from '../assets/crown.svg'

const Navigation = () => {
  return (
    <>
      <nav className='p-3 border-gray-200 rounded bg-gray-50'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <a href='#' className='flex items-center'>
            <img src={crown} className='h-6 mr-3 sm:h-10' alt='crwn-clothing Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap'>Crwon Clothing</span>
          </a>
          <button data-collapse-toggle='navbar-solid-bg' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls='navbar-solid-bg' aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip='evenodd' /></svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
            <ul className='flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent'>
              <li>
                <Link to='/' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white' aria-current='page'>Home</Link>
              </li>
              <li>
                <Link to='/shop' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Shop</Link>
              </li>
              <li>
                <Link to='/auth' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Sign-in</Link>
              </li>
              <li>
                <Link to='#' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
