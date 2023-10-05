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
import Error from './components/Error';
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
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/cart' element={<Cart/>}> </Route>
          <Route path='*' element={<Error/>}> </Route>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
