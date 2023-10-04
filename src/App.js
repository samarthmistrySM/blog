import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
      <Navigationbar/>

      <div className="container py-[70px]" >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
