import React from 'react';

const ImageList = ({ images }) => {
    const renderedImages = images.map((img, i) => {
        return <img key={img.id} src={img.urls.regular} />;
    });

    return <div>{renderedImages}</div>;
};

export default ImageList;
