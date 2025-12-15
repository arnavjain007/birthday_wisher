import { useState } from 'react'
import Login from './components/Login.jsx'
import { UserContext } from './contexts/UserContext.jsx';
import './App.css'

function App() {
  const [user,setUser]=useState(null);

  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <Login/>
      </UserContext.Provider>
    </>
  )
}

export default App;
