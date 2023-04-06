import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { emailSignInStart } from '../redux/user/userAction'

import FormInput from './FormInput'
import Button from './Button'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

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
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log(error.message)
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
