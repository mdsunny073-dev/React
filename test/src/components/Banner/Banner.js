import React from 'react'
import './Banner.css'
import arrowOne from '../assets/arrowOne.png'
import Illustration from '../assets/Illustration.png'


const Banner = () => {
  return (
    <section id="banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="steller">
          <h2>Building stellar websites for early startups</h2>
        </div>
        <div className="lorem">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="last-part">
          <div className="second-button">
            <button>View our work</button>
          </div>
          <div className="view">
            <p>View Pricing</p>
          </div>
          <div className="arrow">
            <img src={arrowOne} alt="arrowOne"/>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="illu">
          <img src={Illustration} alt="Illustration"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner