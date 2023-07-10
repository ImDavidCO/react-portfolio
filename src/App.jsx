import React from 'react';
import './index.css';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Works from './components/works/Works';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <About/>
        <Navbar/>
        <Works/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;