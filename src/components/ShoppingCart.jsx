/* eslint-disable react/jsx-closing-tag-location */
import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import CartItem from './CartItem'
import Button from './Button'

export default function ShoppingCart () {
  const { isCartOpen, setCartOpen } = useContext(CartContext)
  const { cartItems, cartTotal } = useContext(CartContext)

  const navigate = useNavigate()

  function calculateShipping (cartTotal) {
    if (cartTotal === 0) {
      return 0
    } else if (cartTotal > 1 && cartTotal < 100) {
      return 20
    } else if (cartTotal >= 100) {
      return 0
    }
  }

  const shipping = calculateShipping(cartTotal)

  const tax = cartTotal * 0.16
  const total = cartTotal + shipping + tax

  const goToCheckout = () => {
    navigate('/checkout')
    setCartOpen(false)
  }

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>

      <Dialog as='div' className='relative z-10' onClose={setCartOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-105'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-105'
            >
              <Dialog.Panel className='flex w-full max-w-3xl transform text-left text-base transition sm:my-8'>
                <form className='relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8'>
                  <div className='flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-lg font-medium text-gray-900'>Shopping Cart</h2>
                    <button type='button' className='text-gray-400 hover:text-gray-500' onClick={() => setCartOpen(false)}>
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                  </div>

                  <section aria-labelledby='cart-heading'>
                    {cartItems.length === 0
                      ? (<div className='flex justify-center items-center h-96'>
                        <p className='text-gray-500 text-2xl'>Your cart is empty</p>
                      </div>)
                      : (<ul role='list' className='divide-y divide-gray-200 px-4 sm:px-6 lg:px-8'>
                        {cartItems.map((item) => (
                          <CartItem key={item.id} cartItem={item} />
                        ))}
                      </ul>)}

                  </section>

                  <section aria-labelledby='summary-heading' className='mt-auto sm:px-6 lg:px-8'>
                    <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
                      <h2 id='summary-heading' className='sr-only'>
                        Order summary
                      </h2>

                      <div className='flow-root'>
                        <dl className='-my-4 divide-y divide-gray-200 text-sm'>
                          <div className='flex items-center justify-between py-4'>
                            <dt className='text-gray-600'>Subtotal</dt>
                            <dd className='font-medium text-gray-900'>${cartTotal}</dd>
                          </div>
                          <div className='flex items-center justify-between py-4'>
                            <dt className='text-gray-600'>Shipping</dt>
                            <dd className='font-medium text-gray-900'>${shipping.toFixed(2)}</dd>

                          </div>
                          <div className='flex items-center justify-between py-4'>
                            <dt className='text-gray-600'>Tax</dt>
                            <dd className='font-medium text-gray-900'>${tax.toFixed(2)}</dd>
                          </div>
                          <div className='flex items-center justify-between py-4'>
                            <dt className='text-base font-medium text-gray-900'>Order total</dt>
                            <dd className='text-base font-medium text-gray-900'>${total.toFixed(2)}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>

                  <div className='mt-8 flex justify-end px-4 sm:px-6 lg:px-8'>
                    <Button
                      buttonType='terciary'
                      onClick={goToCheckout}
                      type='submit'
                      className='flex rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                    >
                      <CreditCardIcon className='w-4 h-4 mx-2 ' />
                      Checkout
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
