import React from 'react';
import './whypiles.css';
import { FaClinicMedical, FaStethoscope, FaAmbulance, FaHospital, FaBriefcaseMedical, FaHeartbeat } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { BsCheck2Circle } from "react-icons/bs";
import pilestreatment from '../assets/pilestretmentOne.jpg'


const Whypiles = ({ testimonialsRef }) => {
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <div className="dentist-section py-5 mt-5 mb-4 container">
            <div className="container">
                <div className="row align-items-stretch g-0 text-image-container">
                    {/* Text Section */}
                    <div className="col-md-7 text-section d-flex flex-column justify-content-center">
                        <h2 className="display-6 fw-bold">मूळव्याध कश्यामुळे होऊ शकतो ?</h2>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>बद्धकोष्ठता</p>
                        </div>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>टॉयलेट सीटवर बराच वेळ बसणे</p>
                        </div>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>संडास करताना अति जोर लावणे</p>
                        </div>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>लठ्ठपणा आणि बैठी जीवनशैली</p>
                        </div>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>कमी फाइबर व प्रक्रिया केलेले अन्नपदार्थ</p>
                        </div>
                        <div className='d-flex mt-3 gap-3 align-items-center'>
                            <BsCheck2Circle size={40} className="text-light" />
                            <p className='text-light m-0' style={{ fontSize: "19px" }}>गर्भधारणे दरम्यान व नंतर</p>
                        </div>

                        <button className="btn btn-light btn-lg w-50 wh rounded-0 mt-4 fw-bold" style={{ color: "rgb(0,63,139)" }} onClick={() => scrollToSection(testimonialsRef)}>Review </button>
                    </div>
                    {/* <GoArrowRight /> */}
                    {/* Image Section */}
                    <div className="col-md-5 image-section">
                        <img src={pilestreatment} alt="Dentist treating patient" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whypiles;
