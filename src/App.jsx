import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navigation from './routes/Navigation'
import SignIn from './routes/SignIn'

const Shop = () => {
  return <h1>hi shop</h1>
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
