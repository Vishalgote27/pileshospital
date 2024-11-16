import React from 'react';
import bgimg from '../assets/testimonialbgOne.jpg';
import { FaGoogle, FaStar, FaWhatsapp } from 'react-icons/fa';
import Footer from '../component/Footer';
import './testimonialpage.css';
import bglogoremove from '../assets/newlogoOne.jpeg'
import { FcGoogle } from "react-icons/fc";
import iconjd from '../assets/jdicon.png'

const testimonials = [
    {
        name: "Dadarao Aghade",
        message: "My insurance claim was very well handled by the team. Good results by surgeon and painless procedure done for my relative.",
        rate: 5,
    },
    {
        name: "Sagar Jadhav",
        message: "Very nice & effective treatment given by Dr. Dinesh Jagtap sir. Very co-operative & always reply quickly to patients. I am so satisfied with his treatment.",
        rate: 5,
    },
    {
        name: "Neha Wadikar",
        message: "I visited the hospital for my uncle's treatment. Clean area and doctor is easily accessible. Procedure was painless under complete anaesthesia.",
        rate: 5,
    },
    {
        name: "Noel Tobin",
        message: "Came from Kerala for treatment. My friend recommended Jagtap sir. Painless procedure for my uncle with affordable price. Honest people here.",
        rate: 5,
    },
    {
        name: "Abhijeet Bhokare",
        message: "This is an incredible hospital, doctor and staff also. 100% solution guarantee. Thank you so much Dr. Jagtap.",
        rate: 5,
    },
    {
        name: "Mahendra Gathadi",
        message: "Good job done by the doctor and very supportive  staff.",
        rate: 5,
    },
    {
        name: "Khan Fardeen",
        message: "Great cooperative staff and Best results seen in very short period of time.",
        rate: 5,
    },
    {
        name: "Parth Wadikar",
        message: "Very happy with the experience at the hospital.. separate special care for old age senior citizens. Affordable healthcare!",
        rate: 5,
    },
    {
        name: "Abhijit Dani",
        message: "Affordable health care. Hardly any waiting period..the whole hospital is state of art",
        rate: 5,
    },
    {
        name: "Manisha Suryawanshi",
        message: "Dr Dinesh jagtap is compassionate And have excellent Humane man approch and great results",
        rate: 5,
    },
    {
        name: "Israk Shaikh Shaikh",
        message: "Excellent treatment given by Dr jagtap sir and team..best piles specialist in Ch. Sambhajinagar",
        rate: 5,
    },
    {
        name: "santosh fajge",
        message: "Good practice and supportive stafInstant treatment and good result",
        rate: 5,
    },
    {
        name: "Sujata Pawar",
        message: "Good staff behavior  and polite reception  experience. No waiting time.",
        rate: 5,
    },
    {
        name: "Nazeer Baig",
        message: "Good treatment. Scientific method and approach",
        rate: 5,
    },
    {
        name: "Sarvesh Kala",
        message: "Good Doctor, Great Staff and Cost Effective",
        rate: 5,
    },
    {
        name: "Santosh Bankar",
        message: "Very good service and excellent tritment",
        rate: 5,
    },
    {
        name: "Ganesh Jadhav",
        message: "Thank you sir for each number result",
        rate: 5,
    },
    {
        name: "Rahul Washimbe",
        message: "Number 1 Doctor Good staf",
        rate: 5,
    },
    {
        name: "king patil",
        message: "Good 👍🏻👍🏻",
        rate: 5,
    },
    {
        name: "Payal Sharnagat",
        message: "Good tritmaint",
        rate: 5,
    },
    {
        name: "KOHINOOR COLLECTION",
        message: "👍✨👌",
        rate: 5,
    },
    {
        name: "Abhilash Khandelwal",
        message: "Great hospital",
        rate: 5,
    },
    {
        name: "Pathan Salman",
        message: "Jagtap sir aap bahot sab aache se samjhate..best treatment. Sunday bhi open rehta illaj k liye woh aachi baat hain Shukriya sir",
        rate: 5,
    },
    {
        name: "Somesh Phulambrikar",
        message: "Good staff and all my questions  were answered  by Sir on whatsapp,he is always  available  on phone",
        rate: 5,
    },
    {
        name: "r Solanke",
        message: "Best hospital in Aurangabad",
        rate: 5,
    },
    {
        name: "Babasaheb Tirmakhe",
        message: "*Sir, the work you are doing is very valuable. One day a friend asked me that sir he is a patient and he wants to get treatment for hemorrhoids in Bajaj Hospital but there he is given a date after one month. ",
        rate: 5,
    },
    {
        name: "Nagesh Gavale",
        message: "If there is anyone after Dr. Dhamdere sir, it is Dr. Jagtap sir who is a Mulvyad specialist. It has been five years and my family has no problem with Kadi.Thank you very much Sir",
        rate: 5,
    },
    {
        name: "SAGAR ALHAT",
        message: "Ekach shabd...Raambaan treatment sir. Siraana bhetun aardha traas mitla",
        rate: 5,
    },
    {
        name: "Ganesh Ingale",
        message: "खूप affordable cost आहे treatment chi. siraan समोर सगले फैल. Painless ekdum Thankyou",
        rate: 5,
    },
    {
        name: "Akash Sonawane",
        message: "Good Dr Dinesh jagtap sir",
        rate: 5,
    },
    {
        name: "Anand Sonavane",
        message: "N0 1",
        rate: 5,
    },
    {
        name: "Dnyandeo Dukre",
        message: "My Bhangdar operation was done perfectly Dr. Jagtap sir and all the staff for their good cooperation and congratulations and thanks to all.",
        rate: 5,
    },
    {
        name: "ganesh baddawar",
        message: "Good",
        rate: 5,
    },
    {
        name: "Sachin Bobade",
        message: "Thank you sir for each number result",
        rate: 5,
    },
    {
        name: "avinash pathare",
        message: "Best hospital in Aurangabad",
        rate: 5,
    },
    {
        name: "Madhu Kanade",
        message: "Good Dr Dinesh jagtap sir",
        rate: 5,
    },
];

const TestimonialCard = ({ name, message, rate }) => (
    <div className="col-lg-4 col-md-6 mb-4 mt-3">
        <div className="card h-100 shadow-lg  card-hover text-center">
            <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text">{message}</p>
                <div className="text-warning">
                    {[...Array(rate)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const TestimonialPage = () => (
    <>
        <nav className="navbar navbar-expand-lg smnav   navbar-transparent px-2"
            style={{ zIndex: 1000 }}
        >
            <a className="navbar-brand d-flex justify-content-between align-items-center w-100">
                <h1 className="m-0 text-white d-flex align-items-center">
                    <a href="/">
                        <img
                            className="img img-fluid"
                            style={{ height: "50px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        /></a>
                </h1>
            </a>

            {/* <a href="/" className="navbar-brand d-flex align-items-center" style={{ gap: "20px" }}>
                    <h1 className="m-0 text-white">
                        <img
                            className="img img-fluid"
                            style={{ height: "50px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        />
                    </h1>
                    <button className="btn btn-primary">View Review</button>
                </a> */}

            {/* <a href="/" className="navbar-brand  d-flex space-between align-items-center    ">
                    <h1 className="m-0 text-white">
                        <img
                            className="img img-fluid"
                            style={{ height: "50px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        />
                    </h1>
                    <button className='btn btn-primary'>View Review</button>
                </a> */}
            {/* <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-5 p-lg-0">
                    <a href="/"
                        className="nav-item nav-link active"
                        style={{
                            fontSize: "19px",
                            backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                            color: "white",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                        }}>
                        नाव नोंदणीसाठी संपर्क : +91 8788990261
                    </a>
                </div>
                {/* <a href="/appointment" style={{ borderRadius: "50px", padding: "10px 20px", textAlign: "center", }} className="btn btn-primary  py-2 px-lg-4 d-none d-lg-block ms-3">
                        View Review
                        <i className="fa fa-arrow-right ms-2"></i>
                    </a> */}
                <a href="/"
                    className="nav-item nav-link active"
                    style={{
                        fontSize: "19px",
                        backgroundColor: "rgb(46,67,130)", // Choose a color you prefer
                        color: "#fff",
                        borderRadius: "50px", // Fully rounded
                        padding: "10px 20px", // Adjust padding for pill shape
                        textAlign: "center",
                        marginLeft: "10px"
                    }}>
                    View Review
                    {/* <i className="fa fa-arrow-right ms-2"></i> */}
                </a>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg lgnav fixed-top navbar-transparent"
            style={{ zIndex: 1000 }}
        >
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h1 className="m-0 text-white">
                    <img
                        className="img img-fluid"
                        style={{ height: "80px", width: "auto" }}
                        src={bglogoremove}
                        alt="Logo"
                    />
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
                    <a href="/"
                        className="nav-item nav-link active fw-bold"
                        style={{
                            fontSize: "19px",
                            backgroundColor: "rgb(244,112,37)", // Choose a color you prefer
                            color: "white",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                        }}>
                        नाव नोंदणीसाठी संपर्क : +91 8788990261
                    </a>
                </div>
                {/* () => scrollToSection(testimonialsRef) */}
                {/* <a href="/appointment" style={{ borderRadius: "50px", padding: "10px 20px", textAlign: "center", }} className="btn btn-primary  py-2 px-lg-4 d-none d-lg-block ms-3">
                        View Review
                        <i className="fa fa-arrow-right ms-2"></i>
                    </a> */}
                {/* <button
                    className="nav-item nav-link active fw-bold"
                    style={{
                        fontSize: "19px",
                        backgroundColor: "white", 
                        color: "rgb(46,67,130)",
                        borderRadius: "50px",  
                        padding: "10px 20px",  
                        textAlign: "center",
                        marginLeft: "10px"
                    }} onClick={() => navigate('/review')}>
                    View Review 
                </button> */}
            </div>
        </nav>
        <div className="App">
            <header
                className="text-white text-center position-relative py-5"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }}
                ></div>
                <div className="col-md-12 pt-4 mt-5 d-flex justify-content-center position-relative align-items-center" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold" style={{ color: "white", fontSize: "3rem", marginBottom: "30px" }}>
                        Reviews <span></span>
                        {/* <a href="https://wa.me/918788990261" target="_blank" rel="noopener noreferrer" className="icon-circle whatsapp-icon"> */}
                        <a href="https://www.google.com/search?q=dr+dinesh+jagtap+aurangabad&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIPCAMQABhDGLEDGIAEGIoFMgwIBBAAGEMYgAQYigUyDwgFEAAYQxixAxiABBiKBTIMCAYQABhDGIAEGIoFMgYIBxBFGDzSAQgyNzk3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">  <FcGoogle size={50} className='rounded-circle' style={{ backgroundColor: 'white', padding: "10px", }} /></a>

                        <a style={{ marginLeft: '5px' }} href="https://www.justdial.com/Aurangabad-Maharashtra/Dr-Dinesh-Jagtap-Piles-Specialist-Behind-Mahindra-Showroom-Satara-Parisar/9999PX240-X240-240925123659-S4G5_BZDET"><img style={{ backgroundColor: 'white', padding: '18px' }} className='rounded-circle' src={iconjd} alt="" /></a>
                        {/* </a> */}
                        {/* <FaStar color="#FFD700" size={20} />
                        <FaStar color="#FFD700" size={20} />
                        <FaStar color="#FFD700" size={20} />
                        <FaStar color="#FFD700" size={20} />
                        <FaStar color="#FFD700" size={20} /> */}
                    </h2>
                </div>
            </header>

            <div className="container py-5">
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default TestimonialPage;
