const BUTTON_TYPE_CLASSES = {
  primary: 'bg-blue-700 border rounded hover:bg-blue-600 py-4 w-full text-white',
  secondary: 'bg-gray-200 border rounded hover:bg-gray-300 py-4 w-full',
  terciary: 'ml-4 font-medium text-indigo-600 hover:text-indigo-500 ',
  icon: 'group relative flex w-full justify-center rounded-md bg-gray-200 px-3 py-4 text-sm font-semibold text-gray-600 hover:bg-gray-300'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button
