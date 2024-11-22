import React from 'react'
// import Navbar from './component/Navbar'
import './App.css'
import Header from './component/Header'
// import About from './component/About'
import AboutNavbar from './component/AboutNavbar'
import Service from './component/Service'
import Footer from './component/Footer'
import Contact from './component/Contact'
import MenuList from './component/MenuList'



const App = () => {
  return (
    <div className='conteiner'>
      {/* <Navbar/> */}
      {/* <About/> */}
      <AboutNavbar/>
      <Header/>
      <Service/>
       < MenuList/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
