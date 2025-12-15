import { useState } from 'react'
import Login from './components/Login.jsx'
import { UserContext } from './contexts/UserContext.jsx';
import './App.css'

function App() {
  const [user,setUser]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <>
      <UserContext.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn}}>
        {!isLoggedIn ? 
        <>
          <Login className="bg-pink-400"/>
        </>
        :
        <>
          <div>Happy Birthday ,{user.given_name}</div>
        </>
        }
      </UserContext.Provider>
    </>
  )
}

export default App;
