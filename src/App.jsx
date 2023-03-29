import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/'

import { setCurrentUser } from './redux/user/userAction'

import Home from './routes/Home'
import Navigation from './routes/Navigation'
import Authentication from './routes/Authentication'
import Shop from './routes/Shop'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
