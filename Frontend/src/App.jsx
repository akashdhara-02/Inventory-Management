import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <div className="h-160 w-full flex p-4 bg-blue-600 justify-between gap-4  ">
      <div className=" h-152 w-20 sm: w-35    md:w-48   lg:w-60        bg-gray-900  rounded-2xl border  ">
        {/* //left Nav */}
        <Navbar />
      </div>


      <div
        className=" flex h-152 w-100  sm:w-200    md:w-300  lg:w-400
       bg-gray-900 rounded-2xl  text-white  text-center aligen-center p-2"
      >
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          
        </Routes>
      </div>
    </div>
  );
};
export default App;
