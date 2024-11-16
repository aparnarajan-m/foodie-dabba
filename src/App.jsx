import React from 'react'
// import Navbar from './component/Navbar'
import './App.css'
import Header from './component/Header'
// import About from './component/About'
import AboutNavbar from './component/AboutNavbar'


const App = () => {
  return (
    <div className='conteiner'>
      {/* <Navbar/> */}
      {/* <About/> */}
      <AboutNavbar/>
      <Header/>
    </div>
  )
}

export default App
