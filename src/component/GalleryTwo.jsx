import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import one from '../assets/gallerytwo/gallerytwoone.jpeg';
import two from '../assets/gallerytwo/gallerytwotwo.jpeg';
import three from '../assets/gallerytwo/gallerytwothree.jpeg';
import four from '../assets/gallerytwo/gallerytwofour.jpeg';
import five from '../assets/gallerytwo/gallerytwofive.jpeg';
import seven from '../assets/gallerycss/galleryeightimage.jpeg';
import nine from '../assets/gallerycss/gallerynineimage.jpeg';
import ten from '../assets/gallerycss/gallerytenimage.jpeg'
import './gallery.css';

const images = [
    { id: 1, src: one, alt: 'Image 1' },
    { id: 2, src: two, alt: 'Image 2' },
    { id: 3, src: three, alt: 'Image 3' },
    { id: 4, src: four, alt: 'Image 4' },
    { id: 5, src: five, alt: 'Image 5' },
    { id: 6, src: seven, alt: 'Image 6' },
    // { id: 7, src: nine, alt: 'Image 7' },
    { id: 7, src: ten, alt: 'Image 8' },
];

const GalleryTwo = () => {
    const settings = {
        dots: true,               // Display dots for navigation
        infinite: true,           // Infinite loop
        speed: 500,               // Speed of slide transition
        slidesToShow: 2,          // Number of images to show at once
        slidesToScroll: 1,        // Number of images to scroll at once
        autoplay: true,           // Enable autoplay
        autoplaySpeed: 2500,      // Speed of autoplay
        adaptiveHeight: false,    // Disable adaptive height for uniform slide height
        responsive: [
            {
                breakpoint: 1024, // For large screens
                settings: {
                    slidesToShow: 3, // Show 3 images at once on large screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,  // For tablets
                settings: {
                    slidesToShow: 2, // Show 2 images at once on tablets
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,  // For mobile
                settings: {
                    slidesToShow: 1, // Show 1 image at once on mobile
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="gallery-container mb-5 mt-5 overflow-hidden">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id} className=" mb-4">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="img-fluid"
                            style={{ border: 'orange 1px solid' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GalleryTwo;
