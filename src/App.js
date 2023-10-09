import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import Features from './components/features.js';
import Product_section from './components/Product_section.js';

import { useEffect } from 'react';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Cart from './components/Cart';
import Shop from './components/Shop';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {

  useEffect(()=>{
    console.log("rendered");
  })
  return (
    <div className="App">
      
      
      <BrowserRouter basename="/">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<Shop/>}> </Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' element={<Cart/>}> </Route>
<<<<<<< HEAD
          <Route path='/Shop' element={<Shop/>}> </Route>
=======
          
>>>>>>> f389ce40b5313f3fe82ec10d57dc4b2693baba6d
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
