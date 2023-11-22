import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink, Navigate, redirect } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({setUserData,userData}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const url = "http://localhost:4000";

  const userPresent = (username)=>{
    return userData.some(user => user.username === username)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userPresent(username))  {
      console.log("Registration Failed, username already exists!")
      toast.error('🦄 Registration Failed, username already exists!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }else{
      axios
        .post(url + "/api/users", {username,password})
        .then((response) => {
          console.log(userPresent(response.data.username))
          console.log(response.data);
          toast.success('🦄 Registration Success!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setUserData(prevData=> {
            return [...prevData, {username, password}]
          })
          console.log({username,password});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400 dark:bg-gray-800 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full  space-y-8">
        <div>
          <h2 className="mt-6 text-center text-gray-500 dark:text-gray-400 text-3xl font-extrabold">
            Register your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className=" bg-gray-50 dark:bg-gray-700 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:text-white text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Register
            </button>
          </div>
          <div className='flex justify-between'>
            <span>Already have an Account?</span>
            <NavLink to="/" className="text-pink-500 underline decoration-sky-500">Login!</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
