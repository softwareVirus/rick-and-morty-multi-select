import React from "react";
import HighlightedText from "../../HighlightedText/HighlightedText";
import pluralize from "../../../utils/pluralize";
import "./Option.css";
import { Character } from "../../../types/character";

interface OptionProps {
  character: Character;
  selectedItems: Array<Character>;
  handleCheckboxChange: (character: Character) => void;
  query: string;
}

const Option: React.FC<OptionProps> = ({
  character,
  selectedItems,
  handleCheckboxChange,
  query,
}) => {
  return (
    <div key={character.id} className="option">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={selectedItems.some((item) => item.id === character.id)}
          onChange={() => handleCheckboxChange(character)}
        />
      </label>
      <img
        className="character-avatar"
        src={character.image}
        alt={character.name}
      />

      <div className="character-info-column">
        <p className="character-name">
          <HighlightedText query={query} text={character.name} />
        </p>
        <p className="character-episode">
          {character.episode.length}{" "}
          {pluralize("Episode", character.episode.length)}
        </p>
      </div>
    </div>
  );
};

export default Option;
