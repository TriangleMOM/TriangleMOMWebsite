import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './HouseSlides.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const images = [
    "images/outside/IMG_6442.jpg",
    "images/outside/IMG_6444.jpg",
    "images/outside/IMG_6446.jpg",
    "images/outside/IMG_6449.jpg",
    "images/outside/IMG_6450.jpg",
];

const HouseSlides = () => {


    return (
        <div className="slide-container">
            <Slide>
                {images.map((slideImage, index) => (
                    <div  class="slide-image-cont" key={index}>
                        <div  class="slide-image" style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default HouseSlides;