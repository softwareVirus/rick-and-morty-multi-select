import React, { Fragment } from "react";

interface HighlightedTextProps {
  text: string;
  query: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, query }) => {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  return (
    <Fragment>
      {index != -1 && query != "" ? (
        <Fragment>
          {text.slice(0, index)}
          <span className="bold">
            {text.slice(index, index + query.length)}
          </span>
          {text.substring(index + query.length)}
        </Fragment>
      ) : (
        text
      )}
    </Fragment>
  );
};

export default HighlightedText;
