import React, { useState, useCallback, useEffect } from 'react';
import Autocomplete from './Autocomplete'; // Import the base Autocomplete component

// Define the product categories and corresponding items
const productCategories = {
  initial: ["Electronics", "Clothing", "Books"],
  Electronics: ["Smartphone", "Laptop", "Camera", "Headphones"],
  Clothing: ["T-Shirt", "Jeans", "Jacket", "Sneakers"],
  Books: ["Fiction", "Non-fiction", "Mystery", "Fantasy"],
};

const ProductSearchAutocomplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(productCategories.initial);

  const handleInputChange = useCallback((event) => {
    const value = event.target.value;
    setQuery(value);

    const tokens = value.trim().split(/\s+/);
    const lastToken = tokens[tokens.length - 1];

    if (productCategories[lastToken]) {
      setSuggestions(productCategories[lastToken]);
    } else if (tokens.length === 1) {
      setSuggestions(productCategories.initial);
    } else {
      setSuggestions([]);
    }
  }, []);

  const handleOptionSelect = useCallback((option) => {
    setQuery((prev) => `${prev} ${option}`);
    if (productCategories[option]) {
      setSuggestions(productCategories[option]);
    } else {
      setSuggestions([]);
    }
  }, []);

  useEffect(() => {
    // Update suggestions based on the current query
    const tokens = query.trim().split(/\s+/);
    const lastToken = tokens[tokens.length - 1];

    if (productCategories[lastToken]) {
      setSuggestions(productCategories[lastToken]);
    } else if (tokens.length === 1) {
      setSuggestions(productCategories.initial);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <Autocomplete
      options={suggestions}
      onInputChange={handleInputChange}
      onOptionSelect={handleOptionSelect}
      value={query}
    />
  );
};

export default ProductSearchAutocomplete;
