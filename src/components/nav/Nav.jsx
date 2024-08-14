import React from 'react';
import './Nav.css';

const Nav = ({ options, onSelect, activeIndex }) => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {options.map((option, index) => (
          <li
            key={index}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => onSelect(option, index)}
          >
            {option.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;