import React from "react";
import "../style/Rams.css";
import Rams from "../rams.jpg";
import RamsOne from "../rams-one.jpg";
import RamsTwo from "../rams-two.jpg";
import RamsThree from "../rams-three.jpg";

const Rams = ({ quoteId, click }) => {
  return <div className="rams" onClick={click} 
    style={{
         background: quoteId < 8 ? `url(${Rams})` :
                      quoteId < 16 ? `url(${RamsOne})` :
                      quoteId < 24 ? `url(${RamsTwo})` :
                      `url(${RamsThree})`
        }}
  />;
};

export default Rams;
