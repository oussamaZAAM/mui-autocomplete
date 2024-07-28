import React, { useState } from 'react';

const Autocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleFocus = () => {
    if (inputValue) {
      setIsOpen(true);
    }
  };

  const handleBlur = () => {
    // Use a timeout to allow the click event to register before closing the dropdown
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  const highlightMatch = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 w-full text-gray-700 leading-tight shadow-sm"
        placeholder="Type to search..."
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer hover:bg-blue-500 hover:text-white px-4 py-2"
            >
              {highlightMatch(option, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
