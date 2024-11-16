import React from 'react';
import './mapconponent.css'
const MapComponent = () => {
    return (
        <div className="map-container">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.695552186427!2d75.316687!3d19.8517377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99df09a1192f%3A0x4b14864c981b7427!2sDr%20Dinesh%20Jagtap%20Best%20piles%20fissure%20fistula%20specialist!5e0!3m2!1sen!2sin!4v1699037867419!5m2!1sen!2sin"
                style={{
                    border: 0,
                    width: '100%',  // Full width of the parent container
                    height: '100%', // Full height of the parent container
                }}
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
};

export default MapComponent;
