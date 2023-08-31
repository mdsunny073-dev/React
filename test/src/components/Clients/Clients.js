import React from 'react'
import './Clients.css'
import women from '../assets/woman.png'
import arrowFive from '../assets/arrowFive.png'
import arrowFour from '../assets/arrowFour.png'

const Client = () => {
  return (
    <section id="clients">
  <div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="texts">
        <h2>What our clients say about us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="agency">
        <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
        <div className="comment">
        <div className="circle">
          <img src={women} alt="woman"/>
        </div>
        <h2>Jenny Wilson</h2>
        <h3>Vice President</h3>
      </div>
      <div className="last">
        <img src={arrowFive} alt="arrowFive"/>
      </div>
      <div className="part">
        <img src={arrowFour} alt="arrowFour"/>
      </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Client