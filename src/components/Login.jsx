import {jwtDecode} from "jwt-decode";
import {useRef,useEffect,useState,useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const {setUser}=useContext(UserContext);
  const googleBtnRef=useRef(null);

  const [isSignup,setIsSignup]=useState(false);
  const [formData,setFormData]=useState({
    email:"",
    password:"",
    error:"",
  });

  handleChange=(e)=>{
    const {name,value}=e.target;
    
  }

  const handleCallback=(res)=>{
    const userData=jwtDecode(res.credential);
    setUser(userData);
  }

  useEffect(()=>{
    google.accounts.id.initialize({
        client_id:"609096507330-c0el62kih7fda1to3dcjgtdjrj3cl1pe.apps.googleusercontent.com",
        callback:handleCallback,
    });
    google.accounts.id.renderButton(
        googleBtnRef.current,
        {theme:"outline",size:"large"}
    );
  },[]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold my-4">Sign-Up/Login</h1>

        <div ref={googleBtnRef}></div>
    </div>
  )
}

export default Login