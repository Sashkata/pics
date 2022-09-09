import React from 'react';

const ImageList = ({ images }) => {
    const renderedImages = images.map(({ id, description, urls }) => {
        return <img key={id} src={urls.regular} alt={description} />;
    });

    return <div>{renderedImages}</div>;
};

export default ImageList;
