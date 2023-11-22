import React, { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navigationbar from "./components/Navigationbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const url = "http://localhost:4000";
  useEffect(() => {
    fetch(url + "/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogin = (username, password) => {
    const USER = userData.find((user) => user.username === username);
    if (USER) {
      if (USER.password === password) {
        console.log("from handlelogin");
        console.log("toast init");
        toast.success("🦄 Welcome to the Blogbites!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setIsLoggedIn(true);
      } else {
        console.log("wrongfirst");
        toast.error("🦄 Username or password is incorrect!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoggedIn(false);
      }
    } else {
      toast.error("🦄 Username or password is incorrect!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setIsLoggedIn(false);
    }
  };

  const handleRegister = (username, password) => {
    console.log({ username, password });
  };
  return (
    <>
      <Router>
        <Navigationbar setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              <Register
                onRegister={handleRegister}
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
        </Routes>

        <div className="dark:bg-gray-800 bg-gray-400">
          <Routes>
            <Route
              path="/home"
              element={isLoggedIn ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/about"
              element={isLoggedIn ? <About /> : <Navigate to="/" />}
            />
            <Route
              path="/services"
              element={isLoggedIn ? <Services /> : <Navigate to="/" />}
            />
            <Route
              path="/contact"
              element={isLoggedIn ? <Contact /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
