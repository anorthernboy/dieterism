import React from "react";
import "../style/Rams.css";

const Rams = ({ click }) => {
  return <div className="rams" onClick={click} style="url(../rams.jpg)"/>;
};

export default Rams;
