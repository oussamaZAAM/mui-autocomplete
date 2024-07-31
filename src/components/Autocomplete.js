import React, { useState } from 'react';
import { useAutocomplete } from '@mui/base';

const Autocomplete = ({ options }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    getRootProps,
    popupOpen,
    setAnchorEl,
  } = useAutocomplete({
    options,
    getOptionLabel: (option) => option,
    onHighlightChange: (_, option) => {
      setHighlightedIndex(option ? groupedOptions.indexOf(option) : -1);
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prev) => Math.min(prev + 1, groupedOptions.length - 1));
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      event.preventDefault();
    } else if (event.key === 'Enter' && highlightedIndex >= 0) {
      const selectedOption = groupedOptions[highlightedIndex];
      alert(`Selected: ${selectedOption}`);
      setHighlightedIndex(-1); // Reset after selection
    }
  };

  return (
    <div {...getRootProps()} ref={setAnchorEl} className="relative max-w-md mx-auto">
      <input
        {...getInputProps()}
        onKeyDown={handleKeyDown}
        className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 w-full text-gray-700 leading-tight shadow-sm"
        placeholder="Type to search..."
      />
      {popupOpen && groupedOptions.length > 0 && (
        <ul
          {...getListboxProps()}
          className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto w-full"
        >
          {groupedOptions.map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={option}
              className={`cursor-pointer px-4 py-2 text-left ${
                highlightedIndex === index ? 'bg-gray-200' : ''
              }`}
            >
              {highlightMatch(option, getInputProps().value)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
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

export default Autocomplete;
