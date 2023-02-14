const CategoryItem = ({ category }) => {
  const { name, imageAlt, imageSrc, href, description } = category

  return (
    <div key={name} className='group relative m-4'>
      <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='h-full w-full object-cover object-center '
        />
      </div>
      <h3 className='mt-6 text-sm text-gray-500'>
        <a href={href}>
          <span className='absolute inset-0' />
          {name}
        </a>
      </h3>
      <p className='text-base font-semibold text-gray-900'>{description}</p>
    </div>
  )
}

export default CategoryItem
