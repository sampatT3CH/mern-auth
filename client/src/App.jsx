import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />}></Route>
      </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
