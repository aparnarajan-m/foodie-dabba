import React from 'react'
import './AboutHeader.css'
import tomato from '/src/assets/tamato 1.png'
import blackjamun from '/src/assets/black-jamun 2.png'
import leaf from '/src/assets/banner-bg-3 2.png'

const AboutHeader = () => {
    return (
        <div className='AboutHeader-container'>
            <div className='aboutHeader-contentsDiv'>
            <div>
                <h1 className='aboutHeading1'>About Us</h1>
                <p className='aboutPara1'>Lorem ipsum is a simple dummy text of the printing <br /> and type settings industry.</p>
            </div>
            <img className='tomato-Img' src={tomato} alt="" />
            <h3 className='aboutusDiv'>Home/ <span className='aboutUs-clr'>About Us</span></h3>
            </div>
            <div className='aboutHeader-imgDiv'>
                <img className='blackjamun-Img' src={blackjamun} alt="" />
                <img className='leaf-Img' src={leaf} alt="" />
            </div>
        </div>
    )
}

export default AboutHeader
