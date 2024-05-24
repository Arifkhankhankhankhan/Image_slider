import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const [count, setCount] = useState(0);
    const width = 500;
    const images = [
        "https://picsum.photos/500/300/?random/1",
        "https://picsum.photos/500/300/?random/10",
        "https://picsum.photos/500/300/?random/20",
        "https://picsum.photos/500/300/?random/50",
        "https://picsum.photos/500/300/?random/70",
        "https://picsum.photos/500/300/?random/30"
    ];

    const prevSlide = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const nextSlide = () => {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    };

    return (
        <div className="container">
            <div
                className="img-container"
                style={{ transform: `translateX(-${count * width}px)` }}
            >
                {images.map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
            </div>
            <FontAwesomeIcon icon={faCircleLeft} className="btn prev" onClick={prevSlide} />
            <FontAwesomeIcon icon={faCircleRight} className="btn next" onClick={nextSlide} />
        </div>
    );
};

export default Slider;
