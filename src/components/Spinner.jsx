import { Ring } from '@uiball/loaders'

const Spinner = () => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 flex items-center justify-center'>
      <Ring size={45} speed={1.4} color='#4f46e5' />
    </div>
  )
}

export default Spinner
