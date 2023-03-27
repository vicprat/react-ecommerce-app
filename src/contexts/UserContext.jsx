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

// userReducer.js
// This reducer will be used to update the user information.
// The currentUser state will be updated with the payload of the dispatched action.
// The payload will be the user object.
// The user object will contain the user id and the user name.

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

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // This code is a reducer function for a React hook. The hook is used to store
  // user information, which is used in the context of a React application.
  //
  // The reducer function accepts an initial state and returns a reducer function
  // that accepts a state and an action. The action can be one of two types:
  // USER_ACTIONS_TYPES.SET_CURRENT_USER and USER_ACTIONS_TYPES.SET_USER_LIST.
  //
  // The reducer function has two variables: currentUser and dispatch. The
  // currentUser variable stores the current user, and the dispatch variable
  // stores a dispatch function. The dispatch function accepts an action and
  // returns a new state.
  //
  // The setCurrentUser function accepts a user and dispatches a
  // USER_ACTIONS_TYPES.SET_CURRENT_USER action with the user as the payload.
  // The value variable stores the currentUser and setCurrentUser variables.

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
