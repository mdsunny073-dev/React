import React from 'react'
import './Project.css'
import cardOne from '../assets/cardOne.png'
import arrowThree from '../assets/arrowThree.png'
import cardTwo from '../assets/cardTwo.png'
import cardThree from '../assets/cardThree.png'

const Project = () => {
  return (
    <section id="project">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="our">
          <h2>View our projects</h2>
        </div>
        <div className="value-img">
          <img src={cardOne} alt="cardOne"/>
        <h3>Workhub office Webflow Webflow Design</h3>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
        <h4>View project</h4>
        <div className="sec-img">
        <img src={arrowThree} alt="arrowThree"/>
      </div>
      </div>
      </div>
      <div className="col-lg-4">
        <div className="sec-card">
          <div className="second-card">
            <img src={cardTwo} alt="cardTwo"/>
            <h2>Unisaas Website Design</h2>
            <p>View portfolio</p>
            <div className="fourth-arrow">
            <img src={arrowThree} alt="arrowThree"/>
          </div>
          </div>
        </div>
        <div className="third-card">
          <img src={cardThree} alt="cardThree"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Project