import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home/Home'
import {Routes, Route} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='dark:bg-slate-900 dark:text-wite'>
      <Routes>
       <Route path = "/" element = {<Home/>}/>
       <Route path = "/course" element = {<Courses/>}/>
       <Route path = "/signup" element = {<Signup/>}/>
       <Route path = "/login" element = {<Login/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App
