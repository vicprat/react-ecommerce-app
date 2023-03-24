import ProductCard from './ProductCard'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <h2 h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        <span>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className='bg-white my-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
        {
                products.filter((_, idx) => idx < 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />

                  ))
            }
      </div>
    </div>
  )
}

export default CategoryPreview
