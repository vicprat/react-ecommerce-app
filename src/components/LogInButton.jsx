const LogInButton = ({ icon, method }) => {
  return (
    <button onClick={method} type='button' className=' p-4 flex items-center cursor-pointer'>
      {icon}
    </button>
  )
}

export default LogInButton
