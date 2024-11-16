import React from 'react';
import './teleconsultaionbutton.css';
import { MdOutlineSupportAgent } from "react-icons/md";

const TeleConsultationButton = () => {
    return (
        <a
            href="https://www.justdial.com/Aurangabad-Maharashtra/Dr-Dinesh-Jagtap-Piles-Specialist-Behind-Mahindra-Showroom-Satara-Parisar/9999PX240-X240-240925123659-S4G5_BZDET" // Replace with your actual consultation link
            target="_blank"
            rel="noopener noreferrer"
            style={styles.teleConsultationButton}
        >
            <span style={styles.buttonText}><MdOutlineSupportAgent /></span>
        </a>
    );
};

const styles = {
    teleConsultationButton: {
        position: 'fixed',
        bottom: '155px',    // Position from bottom
        right: '98px',      // Position from right
        zIndex: '1000',     // Ensure it's on top of other elements
        cursor: 'pointer',
        animation: 'zoomBackground 2s infinite',  // Apply zoom-in and zoom-out effect with background color change
        padding: '10px 20px',
        color: '#fff',        // White text
        borderRadius: '90px', // Rounded corners
        fontWeight: 'bold',
        fontSize: '16px',
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    buttonText: {
        fontSize: '32px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
};

export default TeleConsultationButton;
