import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../redux/categories/categoriesSelector'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      {isLoading
        ? (<Spinner />)
        : (
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
            <h1 className='text-4xl font-semibold leading-9 text-center text-gray-800 capitalize my-6'>{category}</h1>
            <div className='bg-white my-8 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
              {
          products &&
          products.map((product) => <ProductCard key={product.id} product={product} />)
        }
            </div>
          </div>
          )}
    </>
  )
}

export default Category
