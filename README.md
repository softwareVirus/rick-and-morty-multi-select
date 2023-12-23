# Rick and Morty Character Selector

The Rick and Morty Character Selector is a React application designed to allow users to search and select characters from the renowned TV show "Rick and Morty." This application features a sophisticated multi-select component with an aesthetically pleasing interface, offering various functionalities such as keyboard navigation, loading state representation, and effective exception handling.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Component Documentation](#component-documentation)
    - [ErrorNotification](#1-errornotification)
    - [HighlightedText](#2-highlightedtext)
    - [Loading](#3-loading)
    - [MultiSelectCard](#4-multiselectcard)
    - [MultiSelect](#5-multiselect)
    - [OptionGroup](#6-optiongroup)
    - [Option](#7-option)
3. [App Component](#app-component)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Development Mode](#development-mode)
7. [Production Build](#production-build)
8. [Linting](#linting)
9. [Unit Testing](#unit-testing)
10. [Expanding the Application](#expanding-the-application)

## Project Structure

```plaintext
src
|-- assets
|   |-- react.svg
|-- components
|   |-- ErrorNotification
|   |   |-- ErrorNotification.css
|   |   |-- ErrorNotification.tsx
|   |-- HighlightedText
|   |   |-- HighlightedText.tsx
|   |-- Icons
|   |   |-- CloseIcon.tsx
|   |   |-- DownArrow.tsx
|   |   |-- UpArrow.tsx
|   |-- Loading
|   |   |-- Loading.css
|   |   |-- Loading.tsx
|   |-- MultiSelect
|   |   |-- MultiSelectCard
|   |   |   |-- MultiSelectCard.css
|   |   |   |-- MultiSelectCard.tsx
|   |   |-- MultiSelect.css
|   |   |-- MultiSelect.tsx
|   |-- OptionGroup
|   |   |-- Option
|   |   |   |-- Option.css
|   |   |   |-- Option.tsx
|   |   |-- OptionGroup.css
|   |   |-- OptionGroup.tsx
|-- types
|   |-- character.tsx
|-- utils
|   |-- pluralize.tsx
|-- App.css
|-- App.tsx
|-- index.css
|-- main.tsx
|-- vite-env.d.ts
.eslintrc.cjs
.gitignore
index.html
package-lock.json
package.json
README.md
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Component Documentation

### 1. `ErrorNotification`

The `ErrorNotification` component displays error messages to users, providing a clear indication of issues during data fetching or processing.

#### Props

- `message` (string): The error message to be displayed.

#### Usage

```tsx
import ErrorNotification from "./components/ErrorNotification/ErrorNotification";

// Example usage
<ErrorNotification message="An error occurred while fetching data." />
```

### 2. `HighlightedText`

The `HighlightedText` component highlights matching text within a given string based on a search query. This is particularly useful for emphasizing search results.

#### Props

- `text` (string): The text content to be displayed.
- `query` (string): The search query to highlight within the text.

#### Usage

```tsx
import HighlightedText from "./components/HighlightedText/HighlightedText";

// Example usage
<HighlightedText text="Example text to highlight" query="example" />
```

### 3. `Loading`

The `Loading` component renders a loading spinner, indicating ongoing operations such as data fetching.

#### Usage

```tsx
import Loading from "./components/Loading/Loading";

// Example usage
<Loading />
```

### 4. `MultiSelectCard`

The `MultiSelectCard` component represents a selected character within the multi-select component. It displays the character's name and provides an option to remove the selection.

#### Props

- `index` (number): The index of the selected item.
- `focusedItem` (number | null): The currently focused item's index.
- `setFocusedItem` (React.Dispatch<React.SetStateAction<number | null>>): Function to set the focused item.
- `item` (Character): The character object representing the selected item.
- `handleDelete` (function): Callback function to handle the removal of the selected item.

#### Usage

```tsx
import MultiSelectCard from "./components/MultiSelect/MultiSelectCard/MultiSelectCard";

// Example usage
<MultiSelectCard
  index={0}
  focusedItem={0}
  setFocusedItem={() => {}}
  item={{ id: 1, name: "Example Character" }}
  handleDelete={() => {}}
/>
```

### 5. `MultiSelect`

The `MultiSelect` component serves as the primary multi-select component, facilitating user interactions. It features a search input, a list of selected items, and options for keyboard navigation.

#### Props

- `query` (string): The search query entered by the user.
- `setQuery` (React.Dispatch<React.SetStateAction<string>>): Function to update the search query.
- `selectedItems` (Character[]): Array of selected character items.
- `setSelectedItems` (React.Dispatch<React.SetStateAction<Character[]>>): Function to update the selected items.
- `isOpen` (boolean): Flag indicating whether the multi-select dropdown is open.
- `toggleOpen` (function): Function to toggle the open/close state of the dropdown.

#### Usage

```tsx
import MultiSelect from "./components/MultiSelect/MultiSelect";

// Example usage
<MultiSelect
  query="Example"
  setQuery={() => {}}
  selectedItems={[{ id: 1, name: "Example Character" }]}
  setSelectedItems={() => {}}
  isOpen={true}
  toggleOpen={() => {}}
/>
```

### 6. `OptionGroup`

The `OptionGroup` component displays a list of character options for selection. It includes a loading indicator during data fetching.

#### Props

- `query` (string): The search query entered by the user.
- `characters` (Character[]): Array of character items.
- `selectedItems` (Character[]): Array of selected character items.
- `setSelectedItems` (React.Dispatch<React.SetStateAction<Character[]>>): Function to update the selected items.
- `loading` (boolean): Flag indicating whether data is being fetched.

#### Usage

```tsx
import OptionGroup from "./components/OptionGroup/OptionGroup";

// Example usage
<OptionGroup
  query="Example"
  characters={[{ id: 1, name: "Example Character" }]}
  selectedItems={[]}
  setSelectedItems={() => {}}
  loading={false}
/>
```

### 7. `Option`

The

 `Option` component represents an individual character option within the `OptionGroup`. It includes a checkbox for selection, the character's avatar, name, and episode count.

#### Props

- `character` (Character): The character object representing the option.
- `selectedItems` (Character[]): Array of selected character items.
- `handleCheckboxChange` (function): Callback function to handle checkbox changes.
- `query` (string): The search query entered by the user.

#### Usage

```tsx
import Option from "./components/OptionGroup/Option/Option";

// Example usage
<Option
  character={{ id: 1, name: "Example Character" }}
  selectedItems={[]}
  handleCheckboxChange={() => {}}
  query="Example"
/>
```

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

### Development Mode

To start the development server with HMR, use the following command:

```bash
npm run dev
```

This will launch the application, and you can access it at `http://localhost:3000` in your web browser.

### Production Build

To build the project for production deployment, run:

```bash
npm run build
```

This will generate a `dist` folder containing optimized and minified assets.

### Linting

Check for linting issues in the project using:

```bash
npm run lint
```

### Unit Testing

Run unit tests to ensure the correctness of the components:

```bash
npm run test
```

## Expanding the Application

Feel free to extend the project structure, customize components, or add new features based on the needs of your application. Explore the Vite documentation and React ecosystem for additional possibilities. Happy coding!