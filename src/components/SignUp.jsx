import { useContext, useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase'

import FormInput from './FormInput'
import Button from './Button'
import { UserContext } from '../contexts/UserContext'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
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

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-undef
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName })
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
          label='Display Name'
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
