import React from 'react';
import aboutimg from '../assets/aboutimg.jpeg'; // Replace with your actual image path
import aboutherorm from '../assets/aboutherorm.png'; // Replace with your actual image path
import './about.css'; // Import the CSS file
import Services from './Services';
import Testimonialtwo from './Testimonialtwo';
import Whypiles from './Whypiles';
import Gallery from './Gallery';
import Footer from './Footer';
import GalleryTwo from './GalleryTwo';
import VideoPlayer from './VideoPlayer';

const About = () => {
    return <>
        <div className="about-container mt-2">
            <div className="row g-0">
                {/* Left Side */}
                <div className="col-12 col-md-6 about-left d-flex flex-column justify-content-center align-items-start">
                    <div className="about-content sm:p-5 m-5">
                        <blockquote className="blockquote sm:mb-4 fw-bold" style={{ fontSize: '2rem' }}>About Us</blockquote>
                        <blockquote className="blockquote text-start mb-4" style={{ fontSize: '1.25rem' }}>
                            Dr. Dinesh Jagtap Completed his MBBS and MS (General surgery) from Government Medical College Chhatrapati Sambhajinagar, and worked as Asst. Professor in Department of General Surgery.
                        </blockquote>
                        <blockquote className="blockquote text-start mb-4">
                            He served thousands of patients for every year as a Colorectol Consultant in Kamalnayan Bajaj Hospital.
                            To reduce the waiting period and to provide Services at affordable cost. he has started his own setup to serve the needy patients.
                        </blockquote>

                        <div className="d-flex align-items-center mt-5 gap-3">
                            {/* Responsive Doctor's Logo */}
                            <img
                                src={aboutherorm}
                                alt="Dr. Dinesh Jagtap"
                                className="cir img-fluid"
                            />
                            <div>
                                <h5 className="m-0" style={{ fontSize: "25px" }}>Dr. Dinesh Jagtap</h5>
                                <small style={{ fontSize: "18px" }}>MBBS, MS (Surgery),</small><br />
                                <small style={{ fontSize: "18px" }}>Colorectal Surgeon, Piles Specialist</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-12 col-md-6 about-right p-0 d-flex">
                    <img
                        src={aboutimg}
                        alt="Doctor with Patient"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
        <Services />
        {/* <VideoPlayer /> */}
        {/* <Whypiles /> */}
        <GalleryTwo />

        <Testimonialtwo />
        <Gallery />
        <Footer />
    </>
};

export default About;
