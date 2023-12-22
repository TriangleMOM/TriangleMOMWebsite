import LightGallery from 'lightgallery/react';
import Header from './../../components/header/Header.js';
import './Gallery.css'

const images = [
    { src: "./images/dog1.jpg", alt: "Apple 1" },
    { src: "./images/dog2.jpg", alt: "Apple 1" },
    { src: "./images/dog3.jpg", alt: "Apple 1" },
    { src: "./images/dog4.jpg", alt: "Apple 1" },
    { src: "./images/dog5.jpg", alt: "Apple 1" },
    { src: "./images/dog6.jpg", alt: "Apple 1" },
    { src: "./images/dog7.jpg", alt: "Apple 1" },
    { src: "./images/dog8.jpg", alt: "Apple 1" },
    { src: "./images/dog9.jpg", alt: "Apple 1" },
    { src: "./images/dog10.jpg", alt: "Apple 1" },
]

function GalleryImageContainer() {
    return (
        <div id="gallery-image-container">
             <LightGallery speed={50}>
                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img src={image.src}/>
                        </a>
                    );
                })}
            </LightGallery>
        </div>
    );
}

function Gallery() {
    return (
        <div id="gallery-container">
            <Header>Explore The Gallery</Header>
            <GalleryImageContainer/>
        </div>
    );
}

export default Gallery;