import React from 'react';
import Slider from 'react-slick';
import './testimonialtwo.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';  // Import the star icon for ratings

const Testimonialtwo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const data = [
        {
            name: "Dadarao Aghade",
            message: "My insurance claim was very well handled by the team. Good results by surgeon and painless procedure done for my relative. ",
            rate: 5,
        },
        {
            name: "Sagar Jadhav",
            message: "Very nice & effective treatment given by Dr. Dinesh Jagtap sir. Very co-operative & always reply quickly to patients. I am so satisfied with his treatment .",
            rate: 5,
        },
        {
            name: "Neha Wadikar",
            message: "I visited the hospital for my uncle's treatment. Clean area and doctor is easily accessible. Procedure was painless under complete anaesthesia",
            rate: 5,
        },
        {
            name: "NOEL TOBIN",
            message: "Came from Kerala for treatment..My friend recommended Jagtap sir. Painless procedure for my uncle with affordable price. Honest people here",
            rate: 5,
        },
        {
            name: "Abhijeet Bhokare",
            message: "This is an incredible hospital, doctor and staff also. 100% solution guarantee. Thank you so much Dr. Jagtap.",
            rate: 5,
        },
        {
            name: "NOEL TOBIN",
            message: "Came from Kerala for treatment..My friend recommended Jagtap sir. Painless procedure for my uncle with affordable price. Honest people here",
            rate: 5,
        },
    ];

    return <>

        <section className="home-testimonial ">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center testimonial-pos ">
                    <div className="col-md-12 pt-4 d-flex mb-5 justify-content-center">
                        <h2 style={{ color: "rgb(0,63,139)", fontSize: "2rem", marginBottom: "80px" }} className='fw-bold'>Testimonials</h2>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        {/* <h2>Our Client Says</h2> */}
                    </div>
                </div>
                <section className="home-testimonial-bottom">
                    <div className="container testimonial-inner">
                        <Slider {...settings}>
                            {data.map((testimonial, index) => (
                                <div className="col-md-4 style-3" key={index}>
                                    <div className="tour-item">
                                        <div className="tour-desc bg-light shadow md:p-0 p-5">
                                            <div className="tour-text color-grey-3 text-center" style={{ fontSize: "16px" }}>
                                                &ldquo;{testimonial.message}&rdquo;
                                            </div>
                                            <div className="link-name d-flex justify-content-center mt-3">
                                                {testimonial.name}
                                            </div>
                                            <div className="link-position d-flex justify-content-center mt-2">
                                                <div>
                                                    {[...Array(testimonial.rate)].map((_, i) => (
                                                        <FaStar key={i} color="#FFD700" size={20} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </section>
            </div>
        </section>
    </>
};

export default Testimonialtwo;
