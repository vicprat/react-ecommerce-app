// import CategoryItem from './CategoryItem'
import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {
  const firstThreeCategories = categories.slice(0, 3)

  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Shop by Category</h2>
          <Link to='shop' className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'>
            Browse all categories
          </Link>
        </div>
        <div className='my-8 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-semibold leading-9 text-center text-gray-800'>Top Categories</h1>
          <p className='text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12'>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
          {firstThreeCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg ${
                    index === 0 ? 'sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2' : 'sm:aspect-none sm:relative sm:h-full'
                  }`}
            >
              <img
                src={category.imageSrc}
                alt={category.name}
                className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full'
              />
              <div
                aria-hidden='true'
                className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
              />
              <div className='flex items-end p-6 sm:absolute sm:inset-0'>
                <div>
                  <h3 className='font-semibold text-white capitalize'>
                    <Link to={`shop/${category.name}`}>
                      <span className='absolute inset-0 ' />
                      {category.name}
                    </Link>
                  </h3>
                  <p aria-hidden='true' className='mt-1 text-sm text-white'>
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
            // <CategoryItem key={index} category={category} />
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <Link to='shop' className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'>
            Browse all categories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
