const BUTTON_TYPE_CLASSES = {
  primary: 'bg-blue-700 border rounded hover:bg-blue-600 py-4 w-full text-white',
  secondary: 'bg-gray-200 border rounded hover:bg-gray-300 py-4 w-full',
  terciary: 'ml-4 font-medium text-indigo-600 hover:text-indigo-500 ',
  icon: 'inline-flex items-center p-2  text-sm text-gray-400 hover:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button
