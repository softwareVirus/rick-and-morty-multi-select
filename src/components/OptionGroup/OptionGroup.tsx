import React from "react";
import "./OptionGroup.css";
import Option from "./Option/Option";
import Loading from "../Loading/Loading";
import { Character } from "../../types/character";

interface OptionGroupProps {
  query: string;
  characters: Array<Character>;
  selectedItems: Array<Character>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Character[]>>;
  loading: boolean;
}

const OptionGroup = ({
  query,
  characters,
  selectedItems,
  setSelectedItems,
  loading,
}: OptionGroupProps) => {
  const handleCheckboxChange = (character: Character) => {
    const isSelected = selectedItems.some((item) => item.id === character.id);
    let updatedSelectedItems;

    if (isSelected) {
      // Remove from selected items
      updatedSelectedItems = selectedItems.filter(
        (item) => item.id !== character.id
      );
    } else {
      // Add to selected items
      updatedSelectedItems = [...selectedItems, character];
    }

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div className="option-group-container">
      {loading ? (
        <Loading />
      ) : (
        characters.map((character) => (
          <Option
            character={character}
            handleCheckboxChange={handleCheckboxChange}
            query={query}
            selectedItems={selectedItems}
          />
        ))
      )}
    </div>
  );
};

export default OptionGroup;
