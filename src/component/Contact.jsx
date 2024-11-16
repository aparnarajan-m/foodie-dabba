import React from 'react'
import './Contact.css'
import Logo from '/src/assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-Subcontainer'>

        <div className='footerContainer-Left'>
          <h1 className='FooterConatinerleft-heading1'>Send us Message</h1>
          <p className='FooterConatinerleft-p'>Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum dolor <br /> sit amet consectetur.Lorem ipsum dolor sit <br /> amet consectetur.</p>
          <div className='footercontainerLeft-sec2'>
            <img className='FooterLogo' src={Logo} alt="" />
            <div className='footercontainerLeft-sec2sub'>
              <h1 className='FooterConatinerleft-heading2 leftheading2'>ORDER NOW</h1>
              <h1 className='FooterConatinerleft-heading2'>+91 9544525562</h1>
            </div>
          </div>
        </div>

        <div className='footerContainer-Right'>
          <div className='FooterInput-div'>
            <input type="text" name="" id="FooterInput" placeholder='Name' />
            <input type="text" name="" id="FooterInput" placeholder='Email' />
          </div>
          <div className='FooterInput-div'>
            <input type="text" name="" id="FooterInput" placeholder='Phone' />  
            <input type="text" name="" id="FooterInput" placeholder='Address' />
          </div>
          <div><input type="text" name="" id="FootermessageInput" placeholder='Message...' /></div>
          <div><button className='Footer-btn'>Send Message</button></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
