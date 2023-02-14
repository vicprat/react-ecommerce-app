import CategoryList from './components/CategoryList'

const App = () => {
  const categories = [
    {
      name: 'hats',
      description: 'Work from home accessories',
      imageSrc: 'https://i.ibb.co/cvpntL1/hats.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#'
    },
    {
      name: 'jackets',
      description: 'Journals and note-taking',
      imageSrc: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#'
    },
    {
      name: 'sneakers',
      description: 'Daily commute essentials',
      imageSrc: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#'
    },
    {
      name: 'women\'s',
      description: 'Simple creative products',
      imageSrc: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageAlt: 'Laptops and fancy gadgets.',
      href: '#'
    },
    {
      name: 'mens',
      description: 'Everything your pet needs',
      imageSrc: 'https://i.ibb.co/R70vBrQ/men.png',
      imageAlt: 'Collection of pets toys.',
      href: '#'
    }
  ]

  return (
    <>
      <CategoryList categories={categories} />
    </>
  )
}

export default App
