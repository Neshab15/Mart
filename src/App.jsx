import './App.css'
import Home from './components/Home'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbarr from './components/Navbarr';
import Footerr from './components/Footerr';
import About from './components/About';
import Contact from './components/Contact';
import Productdetails from './components/Productdetails';
import Mycart from './components/Mycart';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbarr/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/productdetails' element={<Productdetails/>}/>
        <Route path='/cart' element={<Mycart/>}/>
      </Routes>
      <Footerr/>
    </BrowserRouter>
    </>
  )
}

export default App
