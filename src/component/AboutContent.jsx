import React from 'react'
import './AboutContent.css'
import AboutImg2 from '/src/assets/about image 2.png'
import AboutRightImage from "/src/assets/right image 1.png"

const AboutContent = () => {
    return (
        <div className='AboutContent-container'>
            <div className='AboutContent-subcontainer'>

                <div className='AboutContent-Left'>
                    <div className='AboutContent-LeftSEc-1'>
                        <h4 className='AboutContent-LeftSEc1-h4'>A Taste Of Home</h4>
                        <h1 className='AboutContent-LeftSEc1-h1'>About Foodie Dabba</h1>
                        <p className='AboutContent-LeftSEc1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit,Sunt atque <br /> maiores laboriosam expedita suscipit iusto nihil </p>
                    </div>

                    <div className='AboutContent-LeftSEc-2'>
                        <div className='AboutContent-LeftSEc2-contence1'>
                            <h2 className='AboutContent-LeftSEc2-h2'>why We Are The Best?</h2>
                            <p className='AboutContent-LeftSEc2-p'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Illo <br /> cupiditate exercitationem amet neque omnis voluptates </p>
                        </div>
                        <div className='AboutContent-LeftSEc2-contence2'>
                            <h2 className='AboutContent-LeftSEc2-h2'>Our Juorney</h2>
                            <p className='AboutContent-LeftSEc2-p'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Esse, itaque perspiciatis et ipsum hic <br /> reiciendis id dolorum ad vero reprehenderit.</p>
                        </div>
                    </div>

                    <div className='AboutContent-LeftSEc-3'>
                        <div className='AboutContent-LeftSEc3-contence1 AboutImg1-div'><img className='Aboutimg2' src={AboutImg2} alt="" /></div>
                        <div className='AboutContent-LeftSEc3-contence2'>
                            <h2 className='AboutContent-LeftSEc3-h2'>Details</h2>
                            <div className='AboutContent-LeftSEc3-item'>
                                <span className='label'>PHONE</span>
                                <span> - +91 9544525562, +91 7356654637</span>
                            </div>
                            <div className='AboutContent-LeftSEc3-item'>
                                <span className='label'>EMAIL</span>
                                <span> - info@foodiedabba.com</span>
                            </div>
                            <div className='AboutContent-LeftSEc3-item'>
                                <span className='label'>ADDRESS</span>
                                <span> - Kozhikode, Mankavu</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='AboutContent-Right'>
                    <img className='AboutRightImage' src={AboutRightImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default AboutContent
