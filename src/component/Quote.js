import React from "react";
import "../style/Quote.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote-container">
      <div className="quote-content">{quote}</div>
    </div>
  );
};

export default Quote;
