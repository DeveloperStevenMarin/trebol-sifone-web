import React from 'react';
import './Header.css';
import {
  BiSolidHelpCircle,
  BiSolidWrench,
  BiSolidUser,
  BiSolidUserCircle,
} from 'react-icons/bi';
import SearchBar from '../searchBar/SearchBar';

const Header = ({ onSelect }) => {
  return (
    <header className='header'>
      <div className='header-top'>
        <div className='logo'>TREBOLSIFONE</div>
        <div className='version'>Versión 0.1b</div>
      </div>
      <div className='header-bottom'>
        <button className='profile-button'>
          <BiSolidUserCircle />
          Aca va el perfil
        </button>
        <SearchBar onSelect={onSelect} />
        <div className='profile-section'>
          <div className='icons'>
            <span className='header-icon'>
              <BiSolidHelpCircle />
            </span>
            <span className='header-icon'>
              <BiSolidWrench />
            </span>
            <span className='header-icon'>
              <BiSolidUser />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;