import React from "react";
import '../components/landing-page.css';
import { Navigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import {GrUserAdmin } from 'react-icons/gr';
import { Footer } from "./Footer";

export function Homepage() {

    return(
    <div className="homepage">
        <div className="get-started">
             <div className="text-landing">
                GET STARTED!<br></br>
                Buy Cool <br></br> and customised Sneakers!
                <Link to = "/allproducts" className="start">Start Buying <FaShoppingCart/> 
                </Link>
             <Link to = "/admin-login" className="toadmin">Add Products    <GrUserAdmin/> </Link>
             </div>
        </div>
        <div className="marquee">
            <marquee scrollamount="25">10% off on shoes worth more than $500</marquee>
         </div>

         <div className="bestBrands">
            <h1>Best Brands</h1>
            <div className="brandlogos">
                <div>
                <a href="https://www.nike.com/in/"> <img src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SEu_Vjo-8YDvR7Xyyasp9QBP_wLr7TqeEQ&usqp=CAU" ></img>
               </a>
                </div>
                <div>
                <a href= "https://www.nike.com/jordan">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgClnUlzJl1Wm1s8bUXeAiHJzPbbkVs8xQg&usqp=CAU"></img></a>
                </div>
                <div> <a href= "https://www.adidas.co.in/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgf6Z0adtDdM2Sm1auS00vtjHkmwM8EVeNWQ&usqp=CAU"></img></a>

                </div>
                <div>
                <a href= "https://yeezymafia.com/">
                <img src="https://w7.pngwing.com/pngs/691/522/png-transparent-adidas-yeezy-brand-logo-yeezy-logo-text-logo-monochrome-thumbnail.png"></img></a>
                </div>
                <div>
                <a href= "https://in.puma.com/in/en/home">
                <img src="https://w7.pngwing.com/pngs/670/927/png-transparent-puma-logo-puma-logo-adidas-swoosh-brand-adidas-text-carnivoran-sneakers-thumbnail.png"></img></a>

                </div>
                <div>
                <a href= "https://shop4reebok.com/">
                <img src="https://w7.pngwing.com/pngs/171/922/png-transparent-reebok-logo-clothing-adidas-business-reebok-angle-white-text-thumbnail.png"></img>
                </a>
                </div>

              
              
               
               
               
               
               
            </div>
            <div className="bestBlogs">
                <h1>Best blogs on shoes</h1>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>AIO Bot Blog</h1>
                        <button>GO TO SITE</button>
                    </div>
                </div>
                <div className="hero-image3">
                    <div className="hero-text">
                        <h1>SNEAKERS</h1>
                        <button>GO TO SITE</button>
                    </div>
                </div>
            </div>
         </div>

        </div>

    );
    
}