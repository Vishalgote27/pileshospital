import React, { useState, useEffect } from 'react';

const Demo = () => {
    // Sample Data
    const data = [
        { name: "One Name", keys: ['One1', 'Two1', 'Three1', 'Four1', 'Five1'] },
        { name: "Two Name", keys: ['One2', 'Two2', 'Three2', 'Four2', 'Five2'] },
        { name: "Three Name", keys: ['One3', 'Two3', 'Three3', 'Four3', 'Five3'] },
        { name: "Four Name", keys: ['One4', 'Two4', 'Three4', 'Four4', 'Five4'] },
        { name: "Five Name", keys: ['One5', 'Two5', 'Three5', 'Four5', 'Five5'] },
    ];

    // State to store selected keys and visibility
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [isVisible, setIsVisible] = useState(false); // Control the visibility of the div
    const [currentKeys, setCurrentKeys] = useState([]); // Track the current keys to display

    // Function to handle hover event
    const handleMouseEnter = (keys) => {
        setIsVisible(true); // Show div on hover
        setCurrentKeys(keys); // Set current keys to display
    };

    // Function to handle click event
    const handleClick = (keys) => {
        setSelectedKeys(keys); // Set the clicked keys
    };

    // Function to handle outside click and close the div
    const handleOutsideClick = (e) => {
        if (!e.target.closest('.keys-container')) {
            setIsVisible(false); // Close the div if clicked outside
            setSelectedKeys([]); // Reset the keys
        }
    };

    // Adding event listener for outside clicks
    useEffect(() => {
        if (isVisible) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isVisible]);

    return (
        <div>
            {/* Navbar */}
            <nav style={styles.navbar}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        style={styles.navItem}
                        onMouseEnter={() => handleMouseEnter(item.keys)} // Show keys on hover
                        onClick={() => handleClick(item.keys)} // Show keys on click
                    >
                        {item.name}
                    </div>
                ))}
            </nav>

            {/* Div to display keys */}
            {isVisible && (
                <div className="keys-container" style={styles.keysContainer}>
                    <ul style={styles.keysList}>
                        {(selectedKeys.length > 0 ? selectedKeys : currentKeys).map((key, index) => (
                            <li key={index} style={styles.keyItem}>{key}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        gap: '20px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    navItem: {
        padding: '10px 15px',
        borderRadius: '5px',
        transition: 'background 0.3s',
        backgroundColor: '#0056b3',
        color: '#fff',
    },
    keysContainer: {
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        minHeight: '50px',
        maxWidth: '90%',  // Responsive max-width
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 2,
        position: 'relative',
    },
    keysList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Make keys wrap in responsive design
        gap: '15px',
        padding: 0,
        listStyleType: 'none',
    },
    keyItem: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
    },
};

export default Demo;
