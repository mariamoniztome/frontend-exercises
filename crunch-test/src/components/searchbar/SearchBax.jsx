import React, { useState } from 'react';
import './searchbar.scss';

import icon from '../../assets/img/search_loop.svg'; 


const SearchBar = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };

  return (
    <div className={`search-wrapper ${focus ? 'focused' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          className={focus ? 'focused' : ''}
          placeholder="Search"
        />
        <button onClick={handleFocus} id="search-button" className={focus ? 'active' : ''}>
            <img src={icon} alt="Logo" loading="lazy" width={15} height={15}/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
