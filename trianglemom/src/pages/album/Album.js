import Header from '../../components/header/Header.js';
import PhotoAlbum from 'react-photo-album';
import imageList from "./Album.json";
import './Album.css';

function Album() {
    const images = imageList["images"];

    return (
        <div id="gallery-container">
            <Header>Explore The Gallery</Header>
            <PhotoAlbum photos={images} layout="masonry"/>
        </div>
    );
}

export default Album;