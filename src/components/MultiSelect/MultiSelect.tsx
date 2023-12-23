import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  useMemo,
  memo,
} from "react";
import "./MultiSelect.css";
import MultiSelectCard from "./MultiSelectCard/MultiSelectCard";
import UpArrow from "../Icons/UpArrow";
import DownArrow from "../Icons/DownArrow";
import { Character } from "../../types/character";

interface MultiSelectProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedItems: Array<Character>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Character[]>>;
  isOpen: boolean;
  toggleOpen: () => void;
}

const MultiSelect = memo(
  ({
    query,
    setQuery,
    selectedItems,
    setSelectedItems,
    isOpen,
    toggleOpen,
  }: MultiSelectProps) => {
    // State to keep track of the currently focused item
    const [focusedItem, setFocusedItem] = useState<number | null>(null);
    // Ref to the container div for keyboard event handling
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Handle keyboard events
    const handleKeyDown = useMemo(
      () => (event: KeyboardEvent) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          // Prevent default scrolling behavior
          event.preventDefault();
          const currentIndex = focusedItem !== null ? focusedItem : -1;
          const nextIndex =
            event.key === "ArrowUp" ? currentIndex - 1 : currentIndex + 1;
          const itemCount = selectedItems.length;

          if (nextIndex >= 0 && nextIndex < itemCount) {
            setFocusedItem(nextIndex);
          }
        } else if (event.key === "Tab") {
          // Prevent default tab behavior
          event.preventDefault();
          const inputElement = containerRef.current
            ?.lastChild as HTMLInputElement;
          if (focusedItem === null) {
            setFocusedItem(0);
          } else if (focusedItem === selectedItems.length - 1) {
            setFocusedItem(null);
            inputElement.focus();
          } else {
            setFocusedItem((prevIndex) =>
              prevIndex !== null ? prevIndex + 1 : 0
            );
          }
        } else if (event.key === "Enter") {
          // Handle Enter key press as needed
        }
      },
      [focusedItem, selectedItems]
    );

    // Handle item deletion
    const handleDelete = useMemo(
      () => (index: number) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems.splice(index, 1);
        setSelectedItems(newSelectedItems);
        setFocusedItem(null);
      },
      [selectedItems, setSelectedItems]
    );

    // Add event listener for keyboard events when the component mounts
    useEffect(() => {
      const containerElement = containerRef.current;

      if (containerElement) {
        containerElement.addEventListener("keydown", handleKeyDown);
      }

      // Remove the event listener when the component unmounts
      return () => {
        if (containerElement) {
          containerElement.removeEventListener("keydown", handleKeyDown);
        }
      };
    }, [handleKeyDown]);

    // Focus on the selected item when it changes
    useEffect(() => {
      if (focusedItem !== null && containerRef.current) {
        const itemElement = containerRef.current.children[
          focusedItem
        ] as HTMLElement;
        itemElement.focus();
      }
    }, [focusedItem]);

    return (
      <div className="multi-select-container">
        {/* Container for selected items and input */}
        <div className="multi-select-box" ref={containerRef} tabIndex={0}>
          {/* Render selected items as MultiSelectCard components */}
          {selectedItems.map((item, index) => (
            <MultiSelectCard
              key={index}
              item={item}
              index={index}
              handleDelete={handleDelete}
              focusedItem={focusedItem}
              setFocusedItem={setFocusedItem}
            />
          ))}
          {/* Input field for searching */}
          <input
            type="text"
            placeholder="Search..."
            className="multi-select-input"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
        </div>
        {/* Arrow to toggle open/close state */}
        <div className="multi-select-arrow" onClick={toggleOpen}>
          {isOpen ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
    );
  }
);

export default MultiSelect;
