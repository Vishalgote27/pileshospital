import React, { useEffect, useRef } from 'react';
import herohomepdimg from '../assets/herohomepdimg.jpg';
import bglogoremove from '../assets/newlogoOne.jpeg';
import newheroimgOne from '../assets/newheroimgOne.jpg';
import newdoctor from '../assets/newdoctor.png';
import newherocanva from '../assets/newchangehero.jpg'
// import newherocanva from '../assets/newheroOnecanva.jpg';
import './home.css';  // Make sure the CSS file is correctly linked
import mobileimg from '../assets/newchangeheromobile.jpg'
// import mobileimg from '../assets/spinehospitalmobile.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import GalleryTwo from './GalleryTwo';




const Home = ({ testimonialsRef }) => {
    const navigate = useNavigate()
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg smnav   navbar-transparent px-2"
                style={{ zIndex: 1000 }}
            >
                <a className="navbar-brand d-flex justify-content-between align-items-center w-100">
                    <h1 className="m-0 text-white d-flex align-items-center">
                        {/* <a href="/"> */}
                        <a href="/"
                            className="nav-item nav-link active"
                            style={{
                                fontSize: "13px",
                                backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                                color: 'white',
                                borderRadius: "50px", // Fully rounded
                                padding: "5px 10px", // Adjust padding for pill shape
                                textAlign: "center",
                            }}>
                            नाव नोंदणीसाठी संपर्क : +91 8788990261
                            {/* </a> */}
                            {/* <img
                                className="img img-fluid"
                                style={{ height: "50px", width: "auto" }}
                                src={bglogoremove}
                                alt="Logo"
                            /> */}
                        </a>
                    </h1>
                    <a
                        className="nav-item nav-link active overflow-hidden"
                        style={{
                            fontSize: "12px",
                            backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                            color: "white",
                            borderRadius: "50px", // Fully rounded
                            padding: "5px 10px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px"
                        }} onClick={() => navigate('/review')}>
                        View Reviews
                    </a>
                </a>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-5 p-lg-0">
                        <a href="/"
                            className="nav-item nav-link active"
                            style={{
                                fontSize: "19px",
                                backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                                color: 'white',
                                borderRadius: "50px", // Fully rounded
                                padding: "10px 20px", // Adjust padding for pill shape
                                textAlign: "center",
                            }}>
                            नाव नोंदणीसाठी संपर्क : +91 8788990261
                        </a>
                    </div>
                    <a
                        className="nav-item nav-link active"
                        style={{
                            fontSize: "19px",
                            backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                            color: "white",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px"
                        }} onClick={() => navigate('/review')}>
                        View Reviews
                    </a>
                </div>
            </nav>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg lgnav fixed-top navbar-transparent"
                style={{ zIndex: 1000 }}
            >
                <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-white">
                        <a href="/"
                            className="nav-item nav-link active fw-bold"
                            style={{
                                fontSize: "19px",
                                backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                                color: 'white',
                                borderRadius: "50px", // Fully rounded
                                padding: "10px 20px", // Adjust padding for pill shape
                                textAlign: "center",
                            }}>
                            नाव नोंदणीसाठी संपर्क : +91 8788990261
                        </a>
                        {/* <img
                            className="img img-fluid"
                            style={{ height: "80px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        /> */}
                    </h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-5 p-lg-0">

                    </div>
                    <a
                        className="nav-item nav-link active fw-bold "
                        style={{
                            fontSize: "19px",
                            backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                            color: "white",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px",
                            cursor: "pointer",
                            // marginRight: '16px',
                        }} onClick={() => navigate('/review')}>
                        View Reviews
                    </a>
                </div>
            </nav>

            {/* Hero Image Section */}
            <div className="hero-section mhOne position-relative full-height">
                <img
                    src={newherocanva}
                    alt="Hero Background"
                    className="hero-image img-fluid"
                />
            </div>
            <div className="hero-section mhTwo position-relative full-height">
                <img
                    src={mobileimg}
                    alt="Hero Background"
                    className="hero-image img-fluid h-100"
                />
            </div>

            <About />

        </>
    );
}

export default Home;
