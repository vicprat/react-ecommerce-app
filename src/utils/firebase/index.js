import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrakjR_ACNQb7muTH53QM86FFGDxwgMmY',
  authDomain: 'crwn-clothing-db-558ec.firebaseapp.com',
  projectId: 'crwn-clothing-db-558ec',
  storageBucket: 'crwn-clothing-db-558ec.appspot.com',
  messagingSenderId: '832398221318',
  appId: '1:832398221318:web:7568a5ee98f4314b0ae387',
  measurementId: 'G-FNRDQ7EQV6'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userDocRef)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userDocRef
}