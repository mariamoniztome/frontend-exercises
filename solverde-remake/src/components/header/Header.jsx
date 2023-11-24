/**
 * A functional component that represents the header section of a website.
 * @returns The JSX code for the header section.
 */
import React from 'react';
import './header.scss';
import SearchBar from '../searchbar/SearchBax';

// Import the logo image
import logo from '../../assets/img/logo.svg'; 

const Header = () => {
  return (
    <header className="header">
   
      <div className="header__inner">
        <div className="header__logo">
            <img src={logo} alt="Logo" loading="lazy" width={100} height={200}/>
        </div>
       
      </div>
      <div className="header__user">
          <SearchBar />
          <button className='btn btn-secondary'>Login</button>
          <button className='btn btn-primary'>Registo</button>
        </div>
    </header>
  );
};

export default Header;

