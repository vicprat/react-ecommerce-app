import React, { useState, useContext } from 'react'

import { signInAuthUserWithEmailAndPassword } from '../utils/firebase'

import FormInput from './FormInput'
import Button from './Button'
import { UserContext } from '../contexts/UserContext'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('Invalid email')
          break
        case 'auth/user-disabled':
          console.log('User disabled')
          break
        case 'auth/user-not-found':
          console.log('User not found')
          break
        case 'auth/wrong-password':
          console.log('Wrong password')
          break
        default:
          console.log('Something went wrong', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          required name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          required name='password'
          value={password}
        />

        <div className='mt-8'>
          <Button type='submit' buttonType='primary'>
            Log In
          </Button>
        </div>

      </form>

    </div>
  )
}

export default SignIn
