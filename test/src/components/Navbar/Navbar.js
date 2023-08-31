import React from 'react'
import './Navbar.css'
import vectorOne from '../assets/vectorOne.png'

const Navbar = () => {
  return (
    <section id="navbar">
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <img src={vectorOne} alt="vectorOne.png"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Blog</a>
          </li>
        </ul>
        <div className="first-button">
          <button>Contact us</button>
        </div>
      </div>
    </div>
  </nav>
</section>
  )
}

export default Navbar