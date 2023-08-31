import React from 'react'
import './Steller.css'
import womanwritingonpaper from '../assets/womanwritingonpaper.png'
import arrowOne from '../assets/arrowOne.png'

const Steller = () => {
  return (
    <section id="building">
  <div className="container">
    <div className="row g-0">
      <div className="col-lg-6">
        <div className="writing-image">
          <img src={womanwritingonpaper} alt="womanwritingonpaper"/>
          <h2>Building stellar websites for early startups</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bacground">
          <div className="bg-texts">
            <h2>Send inquiry</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form action="/" method="post">
              <input type="text" name="name" placeholder="Your Name" className="name"/>
              <input type="email" name="email" placeholder="Your Email" className="email"/>
              <input type="email" name="email" placeholder="Paste your Figma design URL" className="email"/>
            </form>
            <div className="inquiry-button">
              <button>Send an Inquiry</button>
            </div>
            <div className="last-touch">
            <h3>Get in touch with us</h3>
            <img src={arrowOne} alt="arrowOne"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Steller