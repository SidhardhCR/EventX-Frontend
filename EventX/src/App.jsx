
import './App.css'
import LoginPage from './components/LoginPage'
import { Routes ,Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App() {
 

  return (
    <>
     <Routes>
       <Route path='/login' element={<LoginPage />} />
       <Route path='/' element={<Home />} />
       <Route path='/signup' element={<SignUp />} />
     </Routes>
    </>
  )
}

export default App
