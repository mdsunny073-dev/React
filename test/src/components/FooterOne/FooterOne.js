import React from 'react'
import './FooterOne.css'
import Logotwo from '../assets/Logotwo.png'
import fb from '../assets/fb.png'
import twit from '../assets/twit.png'
import ig from '../assets/ig.png'
import linkedin from '../assets/linkedIn.png'

const FooterOne = () => {
  return (
    <section id="weet">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="always">
          <img src={Logotwo} alt="Logotwo"/>
          <h2>We are always open to discuss your project and improve your online presence.</h2>
        </div>
        <div className="me">
          <div className="at-us">
            <div className="contact">
              <h2>Email me at</h2>
              <h3>contact@website.com</h3>
            </div>
            <div className="call-us">
              <h2>Call us</h2>
              <h3>0927 6277 28525</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="talk">
          <h2>Lets Talk!</h2>
          <h3>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</h3>
          <div className="last-icons">
            <img src={fb} alt="fb"/>
            <img src={twit} alt="twit"/>
            <img src={ig} alt="ig"/>
            <img src={linkedin} alt="linkedin"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default FooterOne