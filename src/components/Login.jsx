import {jwtDecode} from "jwt-decode";
import {useRef,useEffect,useState,useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const {setIsLoggedIn,setUser}=useContext(UserContext);
  const googleBtnRef=useRef(null);

//   const [isSignup,setIsSignup]=useState(false);
//   const [formData,setFormData]=useState({
//     email:"",
//     password:"",
//     error:"",
//   });

//   handleChange=(e)=>{
//     const {name,value}=e.target;
//     setFormData((prev)=>({
//         ...prev,
//         [name]:value,
//         error:"",
//     }));
//   }

//   handleSignup=()=>{
//     const {email,password}=formData;
//     if(!email ||password){
//         setFormData((prev)=>({
//             ...prev,
//             error:"All fields are required",
//         }));
//         return;
//     }

//     localStorage.setItem(
//         "localUser",
//         JSON.stringify({email,password})
//     );

//     alert("Signup Successful! Please login.");
//     setIsSignup(false);
//   }

//   const handleLogin = () => {
//     const { email, password } = formData;
//     const storedUser = JSON.parse(localStorage.getItem("localUser"));

//     if (!storedUser) {
//       setFormData((prev) => ({
//         ...prev,
//         error: "No user found. Please sign up first.",
//       }));
//       return;
//     }

//     if (
//       email === storedUser.email &&
//       password === storedUser.password
//     ) {
//       setUser({
//         name: "Local User",
//         email,
//         provider: "local",
//       });
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         error: "Invalid credentials",
//       }));
//     }
//   };

  const handleCallback=(res)=>{
    const userData=jwtDecode(res.credential);
    setUser(userData);
    setIsLoggedIn(true);
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
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-pink-200">
        <h1 className="text-3xl font-bold my-4">Sign-Up/Login</h1>
        <div ref={googleBtnRef}></div>
    </div>
  )
}

export default Login