import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate = useNavigate();

const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    const res=await axios.post("http://localhost:5000/login",{
      email,password,
    });
    console.log(res.data);
      alert("Login Successful");
      navigate("/dashboard");
  }catch(err){
    console.log(err)
  }
};



  





  return (
    <div className="max-w-md mx-auto px-4 py-16 h-162 w-full gap-3  ">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2.5 rounded-md hover:opacity-90"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-500 ">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium  text-blue-600"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
