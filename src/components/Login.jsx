import {jwtDecode} from "jwt-decode";
import {useRef,useEffect} from "react";

const Login = ({user,setUser}) => {
  const googleBtnRef=useRef(null);

  const handleCallback=(res)=>{
    const userData=jwtDecode(red.credential);
    setUser(userData);
  }

  useEffect=(()=>{
    googleBtnRef.accounts.id.initialise({
        client_id:"YOUR_GOOGLE_CLIENT_ID",
        callback:handleCallback,
    });
    googleBtnRef.accounts.id.renderButton(
        googleBtnRef.current,
        {theme:"outline",size:"large"}
    );
  },[]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold">Sign-Up/Login</h1>
        <div ref={googleBtnRef}></div>
    </div>
  )
}

export default Login