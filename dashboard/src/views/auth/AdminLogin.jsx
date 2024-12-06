import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
        <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
                <img className='w-full h-full' src="http://localhost:3004/images/logo.png" alt="image" />
            </div>
            </div> 
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="text"
                name="email"
                value={state.email}
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                value={state.password}
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              Sign In
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't Have an account ?{" "}
                <Link className="font-bold" to="/register">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
