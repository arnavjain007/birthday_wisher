import { useState } from 'react'
import Login from './components/Login.jsx'
import './App.css'

function App() {
  const [user,setUser]=useState([]);

  return (
    <>
      <UserContext.Provider>
        <Login user={user} setUser={setUser}/>
      </UserContext.Provider>
    </>
  )
}

export default App
