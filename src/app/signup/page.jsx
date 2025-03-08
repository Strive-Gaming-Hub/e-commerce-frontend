"use client"
import React,{useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

const signup = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/signup", formData,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials:true
      });
      // const data = await response.json();
      console.log(response,"efwefwe")

      if (response.status==201) {
        setMessage("Account created successfully! 🎉");
        setFormData({ firstName: "", lastName: "", email: "", password: "" });
        router.push("/")

      } else {
        setError(response.message || "Failed to create an account.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="cont min-h-screen w-full flex content-around items-center">
      <div className="content w-full lg:flex md:block content-around items-center">
        <div className="image lg:w-1/2 md:w-full flex justify-center h-screen mt-10">
          <img src="/aplus/2.png" className="w-full h-full object-cover" />
        </div>

        <div className="loginContainer flex flex-col mx-auto lg:w-1/2 md:w-full max-w-[500px]">
          <div className="loginFormHeader sm:m-3 flex flex-col items-center">
            <h2 style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
              Create an Account
            </h2>
            <p style={{ fontFamily: "serif" }}>
              Enter your information below to proceed. If you already have an
              account, please log in instead.
            </p>
          </div>
          <form className="loginForm flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="names flex gap-2  w-full">
              <input
                className="w-full p-2 text-black font-thin font-sans"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                style={{ backgroundColor: "#f0f0f0" }}
              />
              <input
                className="w-full p-2  text-black font-thin font-sans"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                style={{ backgroundColor: "#f0f0f0" }}
              />
            </div>
            <input
              className="p-2 mt-3 w-full text-black font-thin font-sans"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <input
              className="p-2 mt-3 w-full  text-black font-thin font-sans"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <button
              className="w-full mt-3 p-2 bg-black text-white"
              style={{ fontSize: "12px" }}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create an Account"}{" "}
            </button>
          </form>
          {message && <p className="text-green-500 mt-2">{message}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="loginFooter flex flex-col items-center m-3">
            <p style={{ fontSize: "12px" }}>
              Already have an account?{" "}
              <span
                style={{
                  color: "#b65390",
                  fontFamily: "sans-serif",
                  borderBottom: "1.5px solid #b65390",
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
