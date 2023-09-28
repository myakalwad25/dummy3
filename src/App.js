import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import Features from './components/features.js';
import Product_section from './components/Product_section.js';
// import Blog from './components/Blog.js';
import About from './components/About.js';
import { useEffect } from 'react';
import Contact from './components/Contact';
function App() {

  useEffect(()=>{
    console.log("rendered");
  })
  return (
    <div className="App">
      <Navbar/>
      
      
      <Hero/>
      <Features/>
      <Product_section/> 
      {/*
      <Blog/> */
      }
      
      {/* <About/> 
      <Contact/>
      */}
      
    </div>
  );
}

export default App;
