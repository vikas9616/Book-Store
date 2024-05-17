import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home/Home'
import {Routes, Route, Navigate} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();
    console.log(authUser)


  const [count, setCount] = useState(0)

  return (
    <>
     <div className='dark:bg-slate-900 dark:text-wite'>
      <Routes>
       <Route path = "/" element = {<Home/>}/>
       <Route path = "/course" element = {authUser?<Courses/>:<Navigate to="/signup"/>}/>
       <Route path = "/signup" element = {<Signup/>}/>
       <Route path = "/login" element = {<Login/>}/>
     </Routes>
     <Toaster/>
     </div>
    </>
  )
}

export default App
