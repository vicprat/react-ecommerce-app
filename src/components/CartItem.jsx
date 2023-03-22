import Button from './Button'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)

  return (
    <li className='flex py-8 text-sm sm:items-center'>
      <img
        src={imageUrl}
        alt={name}
        className='h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32'
      />
      <div className='ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-y-3 gap-x-5 sm:ml-6 sm:flex sm:items-center sm:gap-0'>
        <div className='row-end-1 flex-auto sm:pr-6'>
          <h3 className='font-medium text-gray-900'>
            <a href={name}>{name}</a>
            <p className='font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right'>
              ${price}
            </p>
          </h3>
        </div>

        <p className='row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right'>
          {quantity} x ${price}
        </p>
        <div className='flex items-center '>
          <Button
            buttonType='icon'
            type='button'
            onClick={() => removeItemToCart(cartItem)}
          >
            <MinusIcon className='h-5 w-5' />
          </Button>
          <h3 className='font-medium text-gray-900'>{quantity}</h3>
          <Button
            buttonType='icon'
            type='button'
            onClick={() => addItemToCart(cartItem)}
          >
            <PlusIcon className='h-5 w-5' />
          </Button>
          <Button
            buttonType='terciary'
            type='button'
            onClick={() => clearItemFromCart(cartItem)}
          >
            <span>Remove</span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
