import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.css';
import { navOptions } from '../../data/navOptions';

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      const results = navOptions.flatMap((item) =>
        item.submenu
          ? item.submenu.items.flatMap((subItem) => {
              const subItemMatches = subItem.label
                .toLowerCase()
                .includes(value);

              // Buscar en las opciones del subItem
              const optionMatches = subItem.options
                ? subItem.options.filter((option) =>
                    option.label.toLowerCase().includes(value)
                  )
                : [];

              // Retorna el subItem si coincide el label o si hay opciones que coincidan
              return subItemMatches || optionMatches.length > 0
                ? [{ ...subItem, matchedOptions: optionMatches }]
                : [];
            })
          : []
      );
      setFilteredItems(results);
      setShowModal(true);
    } else {
      setFilteredItems([]);
      setShowModal(false);
    }
  };

  const handleItemClick = (itemLabel) => {
    console.log('Item clicked:', itemLabel);
    setQuery('');
    setShowModal(false);
    onSelect(itemLabel);
  };

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <BiSearch className='search-icon' />
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder='Buscar'
        />
      </div>
      {showModal && (
        <div className='search-results-modal'>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                <span onClick={() => handleItemClick(item.label)}>
                  {item.label}
                </span>
                {item.matchedOptions && (
                  <ul className='options-list'>
                    {item.matchedOptions.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className='option-item'
                        onClick={() => handleItemClick(option.label)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
