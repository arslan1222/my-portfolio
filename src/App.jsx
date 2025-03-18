import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import MainContect from './Components/MainContect/MainContect';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <MainContect />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;