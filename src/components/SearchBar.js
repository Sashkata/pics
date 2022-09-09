import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(searchTerm);
    };

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label htmlFor='search'>Image Search</label>
                    <input
                        id='search'
                        type='text'
                        placeholder='Search Term Here'
                        onChange={e => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
