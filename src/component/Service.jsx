import React from 'react'
import './Service.css'
import shadowTop from '/src/assets/Serviceshader1.png'
import shadowBottom from '/src/assets/Serviceshader2.png'
import customerService from '/src/assets/customer-service 1.png'
import FastService from '/src/assets/fast-delivery 1.png'
import FoodService from '/src/assets/food 1.png'

const Service = () => {
    let service = [
        {url: customerService, services: "24/7 Service", description: "Lorem ipsum dolor sit amet consectetur."},
        {url: FastService, services: "Fast Delivery", description: "Lorem ipsum dolor sit amet consectetur."},
        {url: FoodService, services: "Delicious Food", description: "Lorem ipsum dolor sit amet consectetur."}
    ]

  return (
    <div className='Serice-container'>
      <div className='shadowTop-div'><img className='shadowTop-Img' src={shadowTop} alt="" /></div>
      <div className='serviceContent-div'>
        <div className='serviceContent-Subdiv'>
        { service.map(item=>(
            <div className='ServiceCard'>
                <img src={item.url} alt="" />
                <div className='ServiceCarddetails'> 
                <h2 className='serviceh2'>{item.services}</h2>
                <p className='servicep'>{item.description}</p>
                </div>
            </div>
        ))} 
      </div>
      </div>
      <div className='shadowBottom-div'><img className='shadowTop-Img' src={shadowBottom} alt="" /></div>
    </div>
  )
}

export default Service
