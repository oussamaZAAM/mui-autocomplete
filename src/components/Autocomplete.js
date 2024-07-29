import React from 'react';
import { useAutocomplete } from '@mui/base';

const Autocomplete = ({ options }) => {
  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    inputValue,
    focused,
  } = useAutocomplete({
    options,
    getOptionLabel: (option) => option,
  });

  return (
    <div className="relative max-w-md mx-auto">
      <input
        {...getInputProps()}
        className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 w-full text-gray-700 leading-tight shadow-sm"
        placeholder="Type to search..."
      />
      {focused && groupedOptions.length > 0 && (
        <ul
          {...getListboxProps()}
          className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto w-full"
        >
          {groupedOptions.map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={option}
              className="cursor-pointer hover:bg-blue-500 hover:text-white px-4 py-2 text-left"  // Added text-left for left alignment
            >
              {highlightMatch(option, inputValue)}
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
