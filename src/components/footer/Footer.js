import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMobileAlt} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import FormFoo from "./FormFoo";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription p-10">
                <div className="row footer-align">
                    <div className="col-lg-4 col-md-4 col-sm-12 about-me">
                        <div className="footer-headline"><h4>who are we</h4></div>
                        <p>
                        Al Raqiah Library is an electronic window of sale around the Kingdom that provides all the requirements of school and office tools, bags and pens to make it easier for the student, employee and hobbyist to purchase the process to reach anywhere and at any time          
                        </p>
                        <ul>
                            <li><a href='#top'><FaWhatsapp /></a></li>
                            <li><a href='#top'><FaMobileAlt /></a></li>
                            <li><a href='#top'><CgPhone /></a></li>
                            <li><a href='#top'><MdEmail /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 list-column">
                        <div className="footer-headline"><h4>Important links</h4></div>
                         <div class="privacy">
                        <ul className="privacy-style">
                            <li><a href='#top'>who are we</a></li>
                            <li><a href='#top'>common questions</a></li>
                            <li><a href='#top'>privacy policy</a></li>
                            <li><a href='#top'>support page</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="footer-headline"><h4>Connect with us</h4></div>
                        <div className="icons">
                        <ul>
                            <li><a href='#top'><FaFacebook /></a></li>
                            <li><a href='#top'><FaInstagram /></a></li>
                            <li><a href='#top'><FaTwitter /></a></li>
                        </ul> 
                        </div>
                        <FormFoo />   
                    </div>
                </div>    
            </section>
        </div>
    )
}

export default Footer
