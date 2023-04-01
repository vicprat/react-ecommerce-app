/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { selectCurrentUser } from '../redux/user/userSelector'
import { selectIsCartOpen, selectCartCount } from '../redux/cart/cartSelector'
import { setIsCartOpen } from '../redux/cart/cartAction'
import crown from '../assets/crown.svg'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { ShoppingBagIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Button from '../components/Button'
import ShoppingCart from '../components/ShoppingCart'

const navigation = {
  routes: [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
}

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)
  const dispatch = useDispatch()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <>
      <nav className='p-3 border-gray-200 rounded bg-gray-50'>
        <div className='container flex flex-wrap items-center justify-between mx-auto h-16'>
          {/* Brand Logo */}
          <Link to='/' className='flex flex-1 ml-4 '>
            <img src={crown} className='h-6 md:h-8' alt='crwn-clothing Logo' />
          </Link>
          {/* Links */}
          <Popover.Group className='hidden md:block absolute inset-x-0 bottom-0 md:static sm:flex-1 sm:self-stretch'>
            <div className='flex h-14 items-center space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0'>
              {navigation.routes.map((item) => (
                <div key={item.name}>
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className='flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600'
                    style={({ isActive }) => {
                      return {
                        color: isActive ? 'rgb(79 70 229 / var(--tw-text-opacity))' : '',
                        borderColor: isActive ? 'rgb(79 70 229 / var(--tw-text-opacity))' : ''
                      }
                    }}
                  >
                    {item.name}
                  </NavLink>

                  <Transition
                    show={openMenu}
                    enter='transform transition duration-[400ms]'
                    enterFrom='opacity-0 scale-75'
                    enterTo='opacity-100 scale-100'
                    leave='transform transition duration-[400ms]'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-75'
                  >
                    <Dialog as='div' className='relative z-10' onClose={setOpenMenu}>
                      <Transition.Child
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <div className='fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity' />
                      </Transition.Child>

                      <div className='fixed inset-0 z-10 overflow-y-auto'>
                        <div className='flex min-h-full items-start justify-center p-4 text-center mt-16 sm:items-center sm:p-0'>
                          <Transition.Child
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                          >
                            <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                              <div className='sm:flex sm:items-start'>
                                <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10'>
                                  <img src={crown} className='h-6 md:h-8' alt='crwn-clothing Logo' />
                                </div>
                                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                                  <Dialog.Title as='h3' className='text-base font-semibold leading-6 justify-start text-gray-900'>
                                    Menu
                                  </Dialog.Title>
                                  <div className='overflow-hidden rounded-md bg-white shadow '>
                                    <ul role='list' className='divide-y divide-gray-200'>
                                      {navigation.routes.map((item) => (
                                        <NavLink
                                          key={item.name}
                                          to={item.href}
                                          className='flex items-center text-lg font-medium text-gray-600 hover:text-indigo-600 py-6 px-28 '
                                          style={({ isActive }) => {
                                            return {
                                              color: isActive ? 'rgb(79 70 229 / var(--tw-text-opacity))' : ''
                                            }
                                          }}
                                        >
                                          {item.name}
                                        </NavLink>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>

                </div>
              ))}
            </div>
          </Popover.Group>

          <div className='flex flex-1 items-center justify-end'>
            {/* Account  */}
            <div className='flex text-center items-center justify-center'>
              {currentUser
                ? (<Link to='/account' className='block text-center text-gray-400 hover:text-gray-500'>
                  <div className='flex items-center justify-center'>
                    <UserCircleIcon className='h-6 w-6' aria-hidden='true' />
                    <p>logOut</p>
                  </div>
                </Link>
                  )
                : (<Link to='/account' className='block text-center text-gray-400 hover:text-gray-500'>
                  <div className='flex items-center justify-center'>
                    <UserCircleIcon className='h-6 w-6' aria-hidden='true' />
                    <p>logIn</p>
                  </div>
                </Link>)}
            </div>
            {/* Cart */}
            <div className='mx-4 lg:ml-8'>
              <Button onClick={toggleCart} type='button' buttonType='icon'>
                <ShoppingBagIcon
                  className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                />
                <span className='text-indigo-600'>{cartCount}</span>
              </Button>

            </div>
            {/* Resoponsive Menu */}
            <div className='sm:hidden'>
              <Button buttonType='icon' type='button' onClick={toggleMenu}>
                <Bars3Icon className='w-6 h-6' />
              </Button>
            </div>
          </div>
          <Transition
            show={isCartOpen}
            enter='transition ease-out duration-150'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {isCartOpen && (<ShoppingCart />)}
          </Transition>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
