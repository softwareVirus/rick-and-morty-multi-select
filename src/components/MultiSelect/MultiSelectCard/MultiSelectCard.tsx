import React from "react";
import "./MultiSelectCard.css";
import CloseIcon from "../../Icons/CloseIcon";
import { Character } from "../../../types/character";
interface MultiSelectCardProps {
  index: number;
  focusedItem: number | null;
  setFocusedItem: React.Dispatch<React.SetStateAction<number | null>>;
  item: Character;
  handleDelete: (index: number) => void;
}

const MultiSelectCard = ({
  index,
  focusedItem,
  setFocusedItem,
  item,
  handleDelete,
}: MultiSelectCardProps) => {
  return (
    <div
      className={`selected-item ${index === focusedItem ? "focused" : ""}`}
      onClick={() => setFocusedItem(index)}
      tabIndex={0}
    >
      <span className="display-name">{item.name}</span>
      <span
        className="delete-icon"
        onClick={() => handleDelete(index)}
        tabIndex={0}
      >
        <CloseIcon fill="white" />
      </span>
    </div>
  );
};

export default MultiSelectCard;
