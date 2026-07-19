import React from "react";
import { Link } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {



const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("user"); // Remove logged-in user
  alert("Logout Successful");
  navigate("/login");
};




  return (
    <div className="h-155 p-2  text-white justify-between">
      <div className=" flex flex-col p-4 gap-20 text-white justify-around">
        <Link to="/home" className="font-bold hover:text-blue-400">
          Home
        </Link>

        <Link to="/dashboard" className="font-bold hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/products" className="font-bold hover:text-blue-400">
          Products
        </Link>

        <Link to="/" className="font-bold hover:text-blue-400">
          Signup
        </Link>

        <button
          onClick={handleLogout}
          className=" font-bold"
        >
          Logout
        </button>
      </div>

      <div className=" align-center text-center px-4 mt-20">
        <MdSettings size={30} className="hover:text-blue-400" />
      </div>
    </div>
  );
};

export default Navbar;
