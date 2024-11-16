import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import one from '../assets/gallerycss/One.jpg';
import three from '../assets/gallerycss/Three.jpg';
import five from '../assets/gallerycss/Five.jpg';
import six from '../assets/gallerycss/Six.jpg';
import seven from '../assets/gallerycss/Seven.jpg';
import eight from '../assets/gallerycss/Eight.jpg';
import './gallery.css';

const images = [
    { id: 1, src: one, alt: 'Image 1' },
    { id: 3, src: three, alt: 'Image 3' },
    { id: 5, src: five, alt: 'Image 5' },
    { id: 8, src: eight, alt: 'Image 8' },
];


const Gallery = () => {
    return <>
        <div className="col-md-12 pt-4 mt-1 d-flex justify-content-center">
            <h2 style={{ color: "rgb(0, 63, 139)", fontSize: "2rem", marginBottom: "30px" }} className='fw-bold'>Gallery</h2>
        </div>
        <div className="gallery-container mb-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="image-wrapper mb-4">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
};

export default Gallery;
