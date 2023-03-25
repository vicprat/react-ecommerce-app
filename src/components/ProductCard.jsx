import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function ProductCard ({ product }) {
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
  }

  return (
    <div className='group relative'>
      <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.name}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>${product.price}</p>
        </div>

      </div>
      <button
        onClick={addProductToCart}
        className='mt-4 relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-gray-100 hover:bg-indigo-500'
      >
        <ShoppingCartIcon className='w-4 h-4 mr-2' /> Add <span className='sr-only'>, {product.name}</span>
      </button>
    </div>
  )
}
