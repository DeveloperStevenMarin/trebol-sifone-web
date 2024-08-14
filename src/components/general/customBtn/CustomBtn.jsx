import React from 'react';
import './CustomBtn.css';
import { BiChevronRight } from 'react-icons/bi';

const CustomBtn = ({
  label,
  color,
  onClick,
  className = '',
  dropdown = false,
  isOpen = false,
  icon,
  size = 'm',
  textAlign = 'center',
}) => {
  const dropdownClass = dropdown ? 'dropdown' : '';
  const isOpenClass = isOpen ? 'open' : '';
  const btnClass = `custom-btn ${color} ${size} ${dropdownClass} ${isOpenClass} ${textAlign} ${className}`;

  return (
    <button type='button' className={btnClass} onClick={onClick}>
      {label}
      {dropdown && (
        <span className={isOpen ? 'open' : ''}>
          {icon || <BiChevronRight />}
        </span>
      )}
    </button>
  );
};

export default CustomBtn;
