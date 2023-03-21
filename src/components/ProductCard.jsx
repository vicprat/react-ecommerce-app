import { Link } from 'react-router-dom'

export default function ProductCard ({ product }) {
  const { name, price, imageUrl } = product

  return (
    <div className='group relative'>
      <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
        <img
          src={imageUrl}
          alt={name}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <Link to={`/shop/products/${name}`}>
              <span aria-hidden='true' className='absolute inset-0' />
              {name}
            </Link>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{price}</p>
      </div>
    </div>
  )
}
