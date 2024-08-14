import React, { useEffect, useRef, useState } from 'react';
import './Submenu.css';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import CustomBtn from '../general/customBtn/CustomBtn';

const Submenu = ({ title, items, onSelect }) => {
  const listRef = useRef(null);
  const arrowRef = useRef(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [index]: !prevOpenSubmenus[index],
    }));
  };

  const handleItemClick = (item, index) => {
    if (item.options) {
      toggleSubmenu(index);
    } else {
      setSelectedItem(index);
      onSelect(item.label);
    }
  };

  const handleOptionClick = (option) => {
    onSelect(option.label);
  };

  useEffect(() => {
    selectedItem === null && setOpenSubmenus({});
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      const list = listRef.current;
      const arrow = arrowRef.current;

      if (list) {
        if (list.scrollHeight - list.scrollTop === list.clientHeight) {
          if (arrow) {
            arrow.style.visibility = 'hidden';
          }
        } else {
          if (arrow) {
            arrow.style.visibility = 'visible';
          }
        }
      }
    };

    const list = listRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (list) {
        list.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='submenu'>
      <h3 className='submenu-title'>{title}</h3>
      <ul
        ref={listRef}
        className={`submenu-list ${items.length > 11 ? 'scroll' : ''}`}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <CustomBtn
              label={item.label}
              color='neutral'
              dropdown={!!item.options}
              isOpen={openSubmenus[index]}
              onClick={() => handleItemClick(item, index)}
              size='xl'
              textAlign='left'
            />

            {openSubmenus[index] && item.options && (
              <ul className='submenu-options'>
                {item.options.map((option, optionIndex) => (
                  <CustomBtn
                    key={optionIndex}
                    className='submenu-option-item'
                    onClick={() => handleOptionClick(option)}
                    label={option.label}
                    size='l'
                    textAlign='left'
                  />
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
      {items.length > 11 && (
        <div ref={arrowRef} className='submenu-arrow'>
          <BiChevronDown />
        </div>
      )}
    </div>
  );
};

export default Submenu;
