import React from 'react';

const SearchBar = () => {


    return (
        <div className='ui segment'>
            <form className='ui form'>
                <div className='field'>
                    <label htmlFor="search">Image Search</label>
                    <input id="search" type="text" placeholder='Search Term Here'/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;