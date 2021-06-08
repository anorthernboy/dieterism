import React from "react";
import "../style/Rams.css";

const Rams = ({ quoteId, click }) => {
  return <div className="rams" onClick={click} 
    style={{
         background: `url(../rams.jpg)`
        }}
  />;
};

export default Rams;
