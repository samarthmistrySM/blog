import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navigationbar/>

      <div className="container pt-[69px] dark:bg-gray-800 bg-gray-400" >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
