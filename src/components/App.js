import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

import '../styles/app.css';
import ImageList from './ImageList';

const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        setImages(response.data.results);
    };

    return (
        <div className='hdr ui container '>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
};

export default App;
