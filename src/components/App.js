import React, { useState } from 'react';
import SearchBar from './SearchBar';

import '../styles/app.css';

const App = () => {
    const onSearchSubmit = term => {
        console.log(term);
    };

    return (
        <div className='hdr ui container '>
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    );
};

export default App;
