import React from "react";
import { FaClinicMedical, FaStethoscope, FaAmbulance, FaHospital, FaBriefcaseMedical, FaHeartbeat } from "react-icons/fa";
import './services.css';
import serviceTwo from '../assets/servicesTwo.png'

const Services = () => {
    const services = [
        { id: 1, title: "३० मिनिटांत उपचार", description: "रुग्णांना जलद आणि प्रभावी उपचार दिले जातात.", icon: <FaClinicMedical size={60} /> },
        { id: 2, title: "त्याच दिवशी उपचार आणि सुट्टी", description: "रुग्णांना जलद उपचार करून त्वरित घरी पाठवले जाते.", icon: <FaStethoscope size={60} /> },
        { id: 3, title: "अत्यावश्यक सुविधा 24/7 तास", description: "रुग्णालयात २४ तास तातडीच्या उपचारांची सुविधा.", icon: <FaAmbulance size={60} /> },
        { id: 4, title: "रविवार आणि सुट्टीच्या दिवशी उपलब्ध", description: "संपूर्ण आठवड्यात २४ तास सेवा उपलब्ध.", icon: <FaHospital size={60} /> },
        { id: 5, title: "अनेक वर्षे उपचारांचा अनुभव", description: "उच्च दर्जाचे उपचार हजारो रुग्णांवर केलेले आहेत.", icon: <FaBriefcaseMedical size={60} /> },
        { id: 6, title: "इन्शुरन्स सुविधा उपलब्ध", description: "रुग्णांना इन्शुरन्सच्या माध्यमातून आर्थिक सहाय्य.", icon: <FaHeartbeat size={60} /> },
    ];

    return (
        <div
            className="services-section mt-5 mb-5"
            style={{
                backgroundImage: `url(${serviceTwo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px 0",
            }}
        >
            <div className="overlay"></div>
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <h2 className="text-center text-white mb-5 fw-bold" style={{ fontSize: "2rem" }}>Our Services</h2>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-6 col-lg-6 col-xl-4 mb-5">
                            <div className="service-card d-flex align-items-center justify-content-start gap-4 p-5">
                                <div className="service-icon me-4">{service.icon}</div>
                                <div className="service-text">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text mt-2" style={{ fontSize: "18px" }}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
