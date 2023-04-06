import { takeLatest, put, all, call } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './userTypes'

import { signInSuccess, signInFailed, signUpSuccess, signOutSuccess, signOutFailed } from './userAction'

import { getCurrentUser, createUserDocumentFromAuth, signInWithGoogleRedirect, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from '../../utils/firebase'

// In this file we are using the call effect to call the functions that we have created in the firebase.js file. We are also using the put effect to dispatch the actions that we have created in the userAction.js file.
// The call effect is used to call a function and the put effect is used to dispatch an action.

export function * getSnapShotFromUserAuth (userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function * signInWithGoogle () {
  try {
    const { user } = yield call(signInWithGoogleRedirect)
    yield call(getSnapShotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function * signInWithEmail ({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
    yield call(getSnapShotFromUserAuth, user)
  } catch (error) {
    let errorMessage
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email'
        break
      case 'auth/user-disabled':
        errorMessage = 'User disabled'
        break
      case 'auth/user-not-found':
        errorMessage = 'User not found'
        break
      case 'auth/wrong-password':
        errorMessage = 'Wrong password'
        break
      default:
        errorMessage = 'Something went wrong'
    }
    yield put(signInFailed(new Error(errorMessage)))
  }
}

export function * isUserAuthenticated () {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapShotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function * signUp ({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
    yield put(signUpSuccess(user, { displayName }))
  } catch (error) {
    yield call(signInFailed, (error))
  }
}

export function * signOut () {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function * signInAfterSignUp ({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUserAuth, user, additionalDetails)
}

export function * onGoogleSignInStart () {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function * onCheckUserSession () {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function * onEmailSignInStart () {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function * onSignUpStart () {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function * onSignUpSuccess () {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function * signOutStart () {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function * userSagas () {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(signOutStart)
  ])
}
