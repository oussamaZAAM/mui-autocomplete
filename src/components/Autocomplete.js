import React, { useState } from 'react';
import { Popper, Listbox } from '@mui/base';
import './Autocomplete.css';

const Autocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
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
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 w-full"
        placeholder="Type to search..."
      />
      {isOpen && (
        <Popper open={isOpen}>
          <Listbox className="absolute w-full bg-white border mt-1">
            {filteredOptions.map(option => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {option}
              </li>
            ))}
          </Listbox>
        </Popper>
      )}
    </div>
  );
};

export default Autocomplete;
