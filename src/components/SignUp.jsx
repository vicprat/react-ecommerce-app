import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { signUpStart } from '../redux/user/userAction'

import FormInput from './FormInput'
import Button from './Button'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

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

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-undef
      alert('Passwords do not match')
      return
    }
    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // eslint-disable-next-line no-undef
        alert('Email already in use')
      }
      console.error('user creation encountered an error', error)
      resetFormFields()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Name'
          type='text'
          onChange={handleChange}
          required name='displayName'
          value={displayName}
        />
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
        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          required name='confirmPassword'
          value={confirmPassword}
        />

        <div className='mt-8'>
          <Button type='submit' buttonType='primary'>
            Create my account
          </Button>
        </div>

      </form>

    </div>
  )
}

export default SignUp
