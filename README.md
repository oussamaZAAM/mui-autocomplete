# Product Search Autocomplete

This project implements a reusable `Autocomplete` component and extends it to create a `ProductSearchAutocomplete` component. The components are designed to dynamically suggest categories and items based on user input.

## Components Overview

### Autocomplete Component

The `Autocomplete` component is a flexible and reusable component that provides basic autocomplete functionality. It is built using MUI Base UI and styled with Tailwind CSS.

#### Features

- **Keyboard Navigation:** Supports navigating options using the up/down arrow keys and selecting an option with the Enter key.
- **Highlighting:** The current option is highlighted during keyboard navigation, making it easy for users to see which option is selected.
- **Dynamic Option Rendering:** Options are rendered dynamically based on the input value provided by the user.
- **Reusable:** Can be easily extended or customized to suit different use cases.

### Product Search Autocomplete Component

The `ProductSearchAutocomplete` component extends the `Autocomplete` component to create a specialized product search feature.

#### Features

- **Initial Category Suggestions:** Starts by suggesting product categories like "Electronics", "Clothing", and "Books".
- **Context-Based Suggestions:** Once a category is selected, it dynamically suggests relevant products within that category.
- **Dynamic Updates:** The component updates its suggestions as the user continues to type or select options, ensuring a seamless search experience.
- **Extends Autocomplete:** Leverages the functionality of the base `Autocomplete` component while adding context-specific logic.
