const BUTTON_TYPE_CLASSES = {
  primary: 'bg-blue-700 border rounded hover:bg-blue-600 py-4 w-full text-white',
  secondary: 'bg-gray-200 border rounded hover:bg-gray-300 py-4 w-full'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button
