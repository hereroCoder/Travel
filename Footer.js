import React from 'react';
import "../pages/styles/Footer.css"
import logo from "../img/logo-travel-brown.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
<div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" /><link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400;600;900&family=Merienda&family=Montserrat:wght@200;800;900&family=Orbitron:wght@500&family=Pacifico&family=Playfair+Display&family=Poppins:wght@300&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="index.css" />
        <title>Document</title>
        <footer>
          <div className="row">
            <div className="col">
              <img src={logo} alt="logo" className="logo" />
              <p className='eat-sleep'>Eat. Sleep. Travel. Repeat.</p>
            </div>
            <div className="col">
              <h3 >Contact <div className="underline"><span><i className="fa-solid fa-plane" /></span></div></h3>
              <p className='line'>Find Us</p>
              <p>141 stuff road, London, UK</p>
              
              <p className="email-id">
                <p className='line'>Mail Us</p>
                <a className='email' href=""> trekkingtales@gmail.com</a>
              </p>
              <p className='line'>Call Us</p>
              <h3 className='number'>454-655-6746</h3>
            </div>
            <div className="col">
              <h3>General <div className="underline"><span><i className="fa-solid fa-plane" /></span></div></h3>
              <ul>
                <li><a href>Home</a></li>
                <li><a href>Services</a></li>
                <li><a href>About us</a></li>
                <li><a href>Features</a></li>
                <li><a href>Contacts</a></li>
              </ul>
            </div>
            <div className="col">
              <h3>Subscribe <div className="underline"><span><i className="fa-solid fa-plane" /></span></div></h3>
              <form>
                <i className="far fa-envelope" />
                <input type="email" placeholder="Enter email" required />
                <button type="submit"><i className="fas fa-arrow-right" /></button>
              </form>
              <div className="social-icons">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-twitter" />
                <i className="fab fa-linkedin" />
                <i className="fab fa-youtube" />
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright © 2023  TREKKING TALES | All rights reserved | <a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Home</a></p>
        </footer>
      </div>
    );
  }


export default Footer;
