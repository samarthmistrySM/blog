import React, { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLogin = (username, password) => {
    if(username ==="sam" && password === "sam") {
      setIsLoggedIn(true);
    }
    else{
      alert("username or password is incorrect");
      setIsLoggedIn(false);
    }
  };

  return (
    <>
      <Router>
        <Navigationbar />

        <Routes>
          <Route path='/' element={isLoggedIn ? <Navigate to='/home' /> : <Login onLogin={handleLogin} />} />
        </Routes>

        <div className="container dark:bg-gray-800 bg-gray-400">
          <Routes>
            <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to='/' />  } />
            <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to='/' />} />
            <Route path='/services' element={isLoggedIn ? <Services /> : <Navigate to='/' />} />
            <Route path='/contact' element={isLoggedIn ? <Contact /> : <Navigate to='/' />} />
          </Routes>
        </div>

{/* <div className="container dark:bg-gray-800 bg-gray-400">
          <Routes>
            <Route path='/home' element={ <Home />   } />
            <Route path='/about' element={ <About /> }/>
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact /> }/>
          </Routes>
        </div> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
