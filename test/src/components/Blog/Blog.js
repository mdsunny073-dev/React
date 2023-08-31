import React from 'react'
import './Blog.css'
import arabicbusinessman from '../assets/arabicbusinessman.png'
import Arrowlast from '../assets/Arrowlast.png'
import womaninwhitesleeveless from '../assets/womaninwhitesleeveless.png'
import applemonitors from '../assets/applemonitors.png'

const Blog = () => {
  return (
    <section id="blog">
  <div className="container">
    <div className="our">
      <h2>Our blog</h2>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="how">
          <img src={arabicbusinessman} alt="arabicbusinessman"/>
          <h2>19 Jan 2022</h2>
          <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
          <h4>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h4>
          <div className="read-part">
            <h2>Read More</h2>
            <img src={Arrowlast} alt="Arrowlast"/>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="how">
          <img src={womaninwhitesleeveless} alt="womaninwhitesleeveless"/>
          <h2>19 Jan 2022</h2>
          <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
          <h4>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h4>
          <div className="read-part">
            <h2>Read More</h2>
            <img src={Arrowlast} alt="Arrowlast"/>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="how">
          <img src={applemonitors} alt="applemonitors"/>
          <h2>19 Jan 2022</h2>
          <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
          <h4>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h4>
          <div className="read-part">
            <h2>Read More</h2>
            <img src={Arrowlast} alt="Arrowlast"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Blog