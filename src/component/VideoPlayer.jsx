import React, { useRef } from 'react';
import './videoplayer.css';  // Optional, for styling
// import videoSource from '../assets/gallerycss/video.MOV';  // Import your video source

const VideoPlayer = () => {
    const videoRef = useRef(null); // Create a ref for the video element
    const [isPlaying, setIsPlaying] = React.useState(false); // State to track if video is playing

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause(); // Pause the video if it's playing
            } else {
                videoRef.current.play(); // Play the video if it's paused
            }
            setIsPlaying(!isPlaying); // Toggle the playing state
        }
    };

    return (
        <div className="video-container">
            <video
                ref={videoRef} // Attach the ref to the video element
                className="video-player"
                width="100%" // Adjust the width as needed
                height="auto"
                // src={videoSource} // Use the correct video source
                controls={false} // Hide built-in controls
            />
            <button onClick={handlePlayClick} className="play-button">
                {isPlaying ? 'Pause' : 'Play'} {/* Button text changes based on the state */}
            </button>
        </div>
    );
};

export default VideoPlayer;
