import React from 'react';

const Search = (props) => {
    return (
        <div className="SearchDiv">
            <input value={props.searchValue} onChange={props.Change} className="search" type="text" placeholder="Search...." />
        </div>
    );
}

export default Search;
