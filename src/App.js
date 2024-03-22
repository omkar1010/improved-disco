import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Data_Analytics from './Components/Services/Data-Analytics/Data_Analytics';
import Contact from './Components/Contact/Contact';
import Data_Engineering from './Components/Services/Data-Engineer/Data_Engineering';
import Data_Advisory from './Components/Services/Data-Advisory/Data_Advisory';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path='/data-analytics' element={<Data_Analytics/>}/>
        <Route path='/data-engineering' element={<Data_Engineering/>}/>
        <Route path='/data-advisory' element={<Data_Advisory/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
