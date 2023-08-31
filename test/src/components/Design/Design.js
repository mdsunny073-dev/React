import React from 'react'
import './Design.css'
import IconOne from '../assets/IconOne.png'
import IconTwo from '../assets/IconTwo.png'
import IconThree from '../assets/IconThree.png'
import IconFour from '../assets/IconFour.png'
import IconFive from '../assets/IconFive.png'
import IconSix from '../assets/IconSix.png'


const Design = () => {
  return (
    <section id="design">
  <div className="container">
    <div className="solves text-center">
      <h6>Features</h6>
      <h2>Design that solves problems, one product at a time</h2>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="uses">
          <img src={IconOne} alt="IconOne"/>
          <h2>Uses Client First</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="two">
          <img src={IconTwo} alt="IconTwo"/>
          <h2>Two Free Revision Round</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
       <div className="col-lg-4">
        <div className="template">
          <img src={IconThree} alt="IconThree"/>
          <h2>Template Customization</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="support">
          <img src={IconFour} alt="IconFour"/>
          <h2>24/7 Support</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="quick">
          <img src={IconFive} alt="IconFive"/>
          <h2>Quick Delivery</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
       <div className="col-lg-4">
        <div className="hands">
          <img src={IconSix} alt="IconSix"/>
          <h2>Hands-on approach</h2>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Design