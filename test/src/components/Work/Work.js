import React from 'react'
import './Work.css'
import arrowTwo from '../assets/arrowTwo.png'
import pointerOne from '../assets/pointerOne.png'
import pointerTwo from '../assets/pointerTwo.png'
import pointerThree from '../assets/pointerThree.png'
import pointerFour from '../assets/pointerFour.png'


const Work = () => {
  return (
    <section id="work">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="how">
          <h2>How we work</h2>
        </div>
        <div className="ipsum">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="toch-arrow">
          <div className="get">
            <p>Get in touch with us</p>
          </div>
          <div className="arrow2">
            <img src={arrowTwo} alt="arrowTwo"/>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="first-two">
          <div className="strategy-part">
            <div className="point-one">
              <img src={pointerOne} alt="pointerOne"/>
            </div>
            <div className="strat">
              <h2>Strategy</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
          </div>
          <div className="wire-part">
            <div className="point-two">
              <img src={pointerTwo} alt="pointerTwo"/>
            </div>
            <div className="Wirefr">
              <h2>Wireframing</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
          </div>
        </div>
        <div className="second-two">
          <div className="design-part">
            <div className="point-three">
              <img src={pointerThree} alt="pointerThree"/>
            </div>
            <div className="des">
              <h2>Design</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
          </div>
          <div className="dev-part">
            <div className="point-four">
              <img src={pointerFour} alt="pointerFour"/>
            </div>
            <div className="devolop">
              <h2>Development</h2>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Work