import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

import '../styles/app.css';

const App = () => {
    const onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
            },
        });
    };

    return (
        <div className='hdr ui container '>
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    );
};

export default App;
