import React from "react";
import './Footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className="footer">
        <div className="Contact">
             <div className="about">
              Project madeby: Dikshya Agarwal<br>
              </br>
              email:  Dikshya.agarwal2002@gmail.com<br></br>
              Contact: 27424624
             </div>
             <div className="newsletter">
               subscribe to our newsletter:<br></br>
               <input type="email" name="name" />
                 <button className="btn-subscribe">subscribe</button>
             </div>
        </div>
        <div className="socialicons">
            <ul>
           <li><FaFacebookSquare/></li>
           <li><FaLinkedin/></li>
           <li><FaInstagram/></li>
            </ul>
         
        </div>
    </div>
  )
}
