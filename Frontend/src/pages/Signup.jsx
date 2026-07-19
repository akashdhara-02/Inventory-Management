import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });
      console.log(res.data);
      navigate("/home");
      alert("Signup Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 h-162 w-full">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Create an Account
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 font-bold focus:outline-none focus:ring-2 focus:ring-primary"
        />
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
          className="w-full bg-primary bg-red-600  text-white py-2.5 rounded-md hover:opacity-90"
        >
          Sign Up
        </button>
        <p className="text-sm text-center text-gray-500">
          Already have an account?
          <Link to="/login" className="text-primary font-medium text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
