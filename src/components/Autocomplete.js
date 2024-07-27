import React, { useState } from 'react';
import { Popper } from '@mui/base';

const Autocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 w-full text-gray-700 leading-tight shadow-sm"
        placeholder="Type to search..."
      />
      {isOpen && filteredOptions.length > 0 && (
        <Popper open={isOpen} anchorEl={document.querySelector('input')}>
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.map(option => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer hover:bg-blue-500 hover:text-white px-4 py-2"
              >
                {option}
              </li>
            ))}
          </ul>
        </Popper>
      )}
    </div>
  );
};

export default Autocomplete;
