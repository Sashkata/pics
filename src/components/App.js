import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

import '../styles/app.css';

const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async term => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: { query: term },
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                },
            }
        );

        setImages(response.data.results);
    };

    return (
        <div className='hdr ui container '>
            <SearchBar onSubmit={onSearchSubmit} />
            Found: {images.length} images
        </div>
    );
};

export default App;
