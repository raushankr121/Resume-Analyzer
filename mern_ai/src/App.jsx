import { useState } from 'react'
import './App.css'
import SideBar from './component/SideBar/SideBar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/dashboard'
import Admin from './component/Admin/admin'
import History from './component/History/history'
import Logout from './component/LogOut/logout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <SideBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path = '/admin' element={<Admin/>}></Route>
          <Route path = '/logout' element={<Logout/>}></Route>
          <Route path= '/history' element={<History/>}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
