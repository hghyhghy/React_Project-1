


import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Boxes from './components/Boxes'
import Heading from './components/Heading'
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'

function App() {
  
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full h-full text-white bg-zinc-900'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Footer/>
      <Cards/>
      <Boxes/>
      <Heading/>
      
    </div>
  )
}

export default App
