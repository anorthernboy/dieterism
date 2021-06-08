import React from "react";
import "../style/Rams.css";

const Rams = ({ quoteId, click }) => {
  return <div className="rams" onClick={click} 
    style={{
         background: quoteId < 8 ? "url("../rams.jpg")" : 
                      quoteId < 16 ? "url("../rams-one.jpg")" :
                      quoteId < 24 ? "url("../rams-two.jpg")" :
                      "url("../rams-three.jpg")"
        }}
  />;
};

export default Rams;
