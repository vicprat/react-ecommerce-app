import { createContext, useEffect, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.utils'

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
})

export const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser: null
}

const userRedeucer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userRedeucer, INITIAL_STATE)

  const setCurrentUser = (user) => dispatch(
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
  )

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsuscribe
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
