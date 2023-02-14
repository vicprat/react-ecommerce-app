import CategoryItem from './CategoryItem'

const CategoryList = ({ categories }) => {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold leading-9 text-center text-gray-800'>Top Categories</h1>
            <p className='text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12'>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {categories.map((category) => (
              <CategoryItem key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
