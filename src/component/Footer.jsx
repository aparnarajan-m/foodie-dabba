import React from 'react'
import './Footer.css'
import facebookIcon from '/src/assets/facebookIcon.png'
import instagramIcon from '/src/assets/instagramIcon.png'

const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className='footer-subContainer'>
                <div className='footer-Topdiv'>
                    <div className='footer-Subtopdiv'>
                    <div className='footer-contents1'>
                        <ul>
                            <li className='footerDetails-heading'>USEFULL LINKS</li>
                            <li className='footerDetails-Item'>HOME</li>
                            <li className='footerDetails-Item'>ABOUT</li>
                            <li className='footerDetails-Item'>MENU</li>
                            <li className='footerDetails-Item'>CONNECT US</li>
                        </ul>
                    </div>
                    <div className='footer-contents2'>
                        <ul>
                            <li className='footerDetails-heading'>TOP DISHES</li>
                            <li className='footerDetails-Item'>LOREM IPSUM</li>
                            <li className='footerDetails-Item'>LOREM IPSUM</li>
                            <li className='footerDetails-Item'>LOREM IPSUM</li>
                            <li className='footerDetails-Item'>LOREM IPSUM</li>
                        </ul>
                    </div>

                    <div className='FooterDetails-Div'>
                        <div className='footerDetails-heading-div'><h2 className='footerDetails-heading'>Details</h2></div>
                            <div className='details1'>
                                <div className='detailsNameLine'><span>PHONE</span><span>-</span></div>
                                <div className='detailsNameLine-details'>
                                    <span>+91 9544525562</span>
                                    <span>+91 7356654637</span>
                                </div>
                            </div>
                            <div className='details1'>
                                <div className='detailsNameLine'><span>EMAIL</span><span>-</span></div>
                                <div className='detailsNameLine-details'>
                                    <span>info@foodiedabba.com</span>
                                </div>
                            </div>

                            <div className='details1'>
                                <div className='detailsNameLine'><span>ADDRESS</span><span>-</span></div>
                                <div className='detailsNameLine-details'>
                                    <span>Kozhikode,mankavu</span>
                                </div>
                            </div>
                    </div>

                    <div className='socialMediaDiv'>
                        <h1 className='footerDetails-heading'>SOCIAL MEDIA</h1>
                        <div className='socialMediaIcons'>
                            <img src={instagramIcon} alt="" />
                            <img src={facebookIcon} alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className='footer-Bottomdiv'>
                    <h2>Foodie Dabba all rights reverved. Designed by Zayan.O, Developed by Sameeh & Aparna</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
