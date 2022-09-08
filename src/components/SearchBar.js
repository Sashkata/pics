import React, { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='ui segment'>
            <form className='ui form'>
                <div className='field'>
                    <label htmlFor='search'>Image Search</label>
                    <input
                        id='search'
                        type='text'
                        placeholder='Search Term Here'
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
