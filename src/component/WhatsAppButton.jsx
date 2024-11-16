import React from 'react';
import whatsappIcon from '../assets/whapicon.png'; // Replace with your icon path or URL

const WhatsAppButton = () => {
    return (

        <a
            href="https://wa.me/918788990261" // Add your WhatsApp number here, e.g., 'https://wa.me/your-number'
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
        >
            <img className='' src={whatsappIcon} alt="WhatsApp" style={styles.whatsappIcon} />
        </a>
    );
};

const styles = {
    whatsappButton: {
        position: 'fixed',
        bottom: '150px',    // Position from bottom
        right: '10px',      // Position from right
        zIndex: '1000',     // Ensure it's on top of other elements
        cursor: 'pointer',
        // borderRadius: '50%', // Adds a circular border radius (you can adjust this value for other shapes)
    },
    whatsappIcon: {
        width: '80px',    // Adjust size as needed
        height: '80px',
        borderRadius: "20%",
    },
};

export default WhatsAppButton;
