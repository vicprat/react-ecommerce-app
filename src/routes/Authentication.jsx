/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRedirectResult } from 'firebase/auth'

import { auth, createUserDocumentFromAuth } from '../utils/firebase'
import { googleSignInStart, signOutStart } from '../redux/user/userAction'

import { FaGoogle } from 'react-icons/fa'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Button from '../components/Button'

const Authentication = () => {
  const dispatch = useDispatch()
  const [toggleLogin, setToggleLogin] = useState(true)
  const handleClick = () => {
    setToggleLogin(!toggleLogin)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const signOutUser = () => dispatch(signOutStart())

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

        {toggleLogin ? <SignIn /> : <SignUp />}

        <div className='w-full flex items-center justify-between py-4'>
          <hr className='w-full bg-gray-400' />
          <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>OR</p>
          <hr className='w-full bg-gray-400  ' />
        </div>

        <Button
          onClick={signInWithGoogle}
          buttonType='icon'
          type='button'
        >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <FaGoogle className='h-5 w-5 text-gray-400 group-hover:text-gray-600' aria-hidden='true' />
                </span>
                Sign In with Google
        </Button>

        <div className='w-full flex items-center justify-between py-4'>
          <hr className='w-full bg-gray-400' />
          <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>test btn </p>
          <hr className='w-full bg-gray-400  ' />
        </div>
        <Button onClick={signOutUser} buttonType='secondary' type='button'>
              Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Authentication
