import React from 'react';
import footerlogo from '../assets/footerlogotechsurya.png';
import './footer.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid footer pt-5 pb-5" style={{ backgroundColor: "rgb(0,63,139)" }}>
            <div className="container">
                <div className="row footer-content">
                    {/* Address Section */}
                    <div className="col-12 col-md-4 footer-section sm:mb-4 mb-1 ">
                        <h5 className="text-light" style={{ fontSize: "22px" }}>Address</h5>
                        <p className="text-light" style={{ fontSize: "16px" }}>
                            <i className="fa fa-map-marker-alt me-2 fw-bold" style={{ fontSize: "20px" }}></i>
                            NU ERA Spine Hospital, कमलनयन बजाज रुग्णालयाच्या बाजूला, महिंद्र शोरूमच्या मागे, बीड बायपास, छ. संभाजीनगर - 431010
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="col-12 col-md-4 footer-section mb-4">
                        <h5 className="text-light" style={{ fontSize: "22px" }}>Services</h5>
                        <a className="btn btn-link text-light p-0 d-block mb-2" style={{ fontSize: "16px" }} href="#">मूळव्याध उपचार</a>
                        <a className="btn btn-link text-light p-0 d-block mb-2" style={{ fontSize: "16px" }} href="#">वैद्यकीय तपासणी</a>
                        <a className="btn btn-link text-light p-0 d-block" style={{ fontSize: "16px" }} href="#">आपत्कालीन सेवा</a>
                    </div>

                    {/* Contact Section */}
                    <div className="col-12 col-md-4 footer-section mb-4  ">
                        <h5 className="text-light" style={{ fontSize: "22px" }}>Contact</h5>
                        <p className="footer-phone text-light" style={{ fontSize: "20px" }}>
                            <i className="fa fa-phone-alt me-2"></i>+91 8788990261
                        </p>
                        <div className="footer-icons mt-2">
                            <a href="https://wa.me/918788990261" target="_blank" rel="noopener noreferrer" className="icon-circle whatsapp-icon">
                                <FaWhatsapp size={20} />
                            </a>
                            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-circle instagram-icon">
                                <FaInstagram size={20} />
                            </a> */}
                            <a href="https://www.facebook.com/dinesh.jagtap21/" target="_blank" rel="noopener noreferrer" className="icon-circle facebook-icon">
                                <FaFacebook size={20} />
                            </a>
                        </div>

                    </div>


                    {/* Map Section */}
                    <div className="col-12 footer-section map-container mb-4">
                        <div className="map-responsive">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.695552186427!2d75.316687!3d19.8517377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99df09a1192f%3A0x4b14864c981b7427!2sDr%20Dinesh%20Jagtap%20Best%20piles%20fissure%20fistula%20specialist!5e0!3m2!1sen!2sin!4v1699037867419!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                className="responsive-iframe"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center w-100">
                    <div className="text-light mb-1 mb-md-0" style={{ fontSize: "16px" }}>
                        &copy; <a className="text-light" href="https://techsuryaitsolution.com/">Tech Surya IT Solution</a>, All Rights Reserved.
                    </div>
                    <div className="ms-md-2 mt-2 mt-md-0">
                        <a href="https://techsuryaitsolution.com/">
                            <img className="img-fluid footer-logo" style={{ height: "40px" }} src={footerlogo} alt="Tech Surya" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
