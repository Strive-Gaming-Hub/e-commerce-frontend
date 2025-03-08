"use client";
import React,{useState,useEffect} from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux"
import { login } from "@/Redux/authslice";

export function Login() {
   const router=useRouter()
   const dispatch=useDispatch()
   const token=useSelector(state=> state.auth.token)
   const user=useSelector(state=>state.auth.user)
  //  console.log(token,"and",user)
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log("Updated Token:", token);
      console.log("Updated User:", user);
    }, [token, user]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage(null);
      setError(null);
  
      try {
        const response = await axios.post("http://localhost:3000/api/login", formData,{
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
        });
        // console.log(response,"response")
        // const data = await response.json();
         const userData=response.data
         console.log(userData,"userData")
        if (response.status==200) {
          setMessage("Login Successfull 🎉");
          setFormData({ email: "", password: "" });
          dispatch(login({ user: userData.user, token: userData.token }));
          console.log(token,"and",user)
          router.push("/")
        } else {
          setError(response.message || "Failed to Login");
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
        // console.log(token,"and",user)

      }
  
      setLoading(false);
      // window.location.reload()
    };
  
  return (
     <div className="cont min-h-screen w-full flex content-around items-center">
      <div className="content w-full lg:flex md:block content-around items-center">
        <div className="image lg:w-1/2 md:w-full flex justify-center h-screen mt-10">
          <img
            src="/aplus/1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="loginContainer flex flex-col mx-auto lg:w-1/2 md:w-full max-w-[500px]">
          <div className="loginFormHeader sm:m-3 flex flex-col items-center">
            <h2 style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
              Login
            </h2>
            <p style={{ fontFamily: "serif" }}>
              If you have an account with us, please login
            </p>
          </div>
          <form className="loginForm flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              className="p-2 m-3 w-full text-black font-thin font-sans"
              type="text"
              name="email"
                value={formData.email}
                onChange={handleChange}
              placeholder="Email Address"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <input
              className="p-2 m-3 w-full  text-black font-thin font-sans"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <button
              className="w-full p-2 bg-black text-white"
              style={{ fontSize: "12px" }}
              disabled={loading}
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}{" "}
            </button>
          </form>
          {message && <p className="text-green-500 mt-2">{message}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="loginFooter flex flex-col items-center m-3">
            <p style={{ fontSize: "12px" }}>
              Don't have an account? <span style={{color:"#b65390",fontFamily:"sans-serif",borderBottom:"1.5px solid #b65390"}}><Link href="/signup">CREATE AN ACCOUNT</Link>  </span>
            </p>
            <button style={{color:"#b65390", fontFamily:"serif",borderBottom:"1.5px solid #b65390",marginTop:"10px"}}>FORGOT YOUR PASSWORD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
