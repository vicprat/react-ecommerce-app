const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label className='text-sm font-medium leading-none text-gray-800'>{label}</label>
      <input
        {...otherProps}
        className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
      />
    </>
  )
}

export default FormInput
