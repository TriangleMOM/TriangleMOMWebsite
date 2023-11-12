import LightGallery from 'lightgallery/react';
import './Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

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

function Header() {
    return (
        <div id="header">
            <h1>Explore The Gallery</h1>
        </div>
    );
}

function GalleryImageContainer() {
    return (
        <div id="gallery-image-container">
             <LightGallery
                speed={500}
                // plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src}/>
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
            <Header/>
            <GalleryImageContainer/>
        </div>
    );
}

export default Gallery;