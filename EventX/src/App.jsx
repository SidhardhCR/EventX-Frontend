
import './App.css'
import LoginPage from './components/LoginPage'
import { Routes ,Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import CreateEvents from './components/CreateEvents'

function App() {
 

  return (
    <>
     <Routes>
       <Route path='/login' element={<LoginPage />} />
       <Route path='/' element={<Home />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/create_events' element={<CreateEvents />} />
     </Routes>
    </>
  )
}

export default App
