/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react'
import { getRedirectResult } from 'firebase/auth'

import { auth, createUserDocumentFromAuth, signInWithGoogleRedirect, signOutUser } from '../utils/firebase'
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'

import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import LogInButton from '../components/LogInButton'
import Button from '../components/Button'

const itemList = [
  {
    name: 'Google',
    icon: <FaGoogle className='text-gray-600 hover:text-gray-500' />,
    method: signInWithGoogleRedirect
  },
  {
    name: 'Github',
    icon: <FaGithub className='text-gray-600 hover:text-gray-500' />,
    method: signInWithGoogleRedirect
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className='text-gray-600 hover:text-gray-500' />,
    method: signInWithGoogleRedirect
  }
]

const Authentication = () => {
  const [toggleLogin, setToggleLogin] = useState(true)
  const handleClick = () => {
    setToggleLogin(!toggleLogin)
  }

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        createUserDocumentFromAuth(result.user)
      }
    })
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16'>
        <div className='mb-6'>
          {toggleLogin
            ? <>
              <p tabIndex={0} role='heading' className='text-2xl font-extrabold leading-6 text-gray-800 py-5'>
                Log In to your account
              </p>
              <p className='text-sm mt-4 font-medium leading-none text-gray-500'>
                Don't have an account?
                <button role='button' onClick={handleClick} className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer pl-2'>
                  Sign up here
                </button>
              </p>
              </>
            : <>
              <p tabIndex={0} role='heading' className='text-2xl font-extrabold leading-6 text-gray-800 py-5'>
                Sign up to your account
              </p>
              <p className='text-sm mt-4 font-medium leading-none text-gray-500'>
                Already have an account?
                <button role='button' onClick={handleClick} className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer pl-2'>
                  Log In here
                </button>
              </p>
              </>}
        </div>
        <Button onClick={signOutUser} buttonType='secondary' type='button'>
              Sign Out
        </Button>
        {toggleLogin ? <SignIn /> : <SignUp />}

        <div className='w-full flex items-center justify-between py-4'>
          <hr className='w-full bg-gray-400' />
          <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>OR</p>
          <hr className='w-full bg-gray-400  ' />
        </div>

        <div className='flex justify-center gap-4'>
          {itemList.map((item) =>
            <LogInButton key={item.name} icon={item.icon} method={item.method} />
          )}

        </div>

      </div>
    </div>
  )
}

export default Authentication
