import React from 'react';
import ImageCard from './ImageCard';
import '../styles/imagelist.css';

const ImageList = ({ images }) => {
    const renderedImages = images.map(image => {
        return <ImageCard image={image} key={image.id} />;
    });

    return <div className='image-list'>{renderedImages}</div>;
};

export default ImageList;
