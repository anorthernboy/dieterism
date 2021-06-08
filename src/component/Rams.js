import React from "react";
import "../style/Rams.css";
import RamsImg from "../rams.jpg";
import RamsImgOne from "../rams-one.jpg";
import RamsImgTwo from "../rams-two.jpg";
import RamsImgThree from "../rams-three.jpg";

const Rams = ({ quoteId, click }) => {
  return <div className="rams" onClick={click} 
    style={{
         background: quoteId < 8 ? `url(${RamsImg})` :
                      quoteId < 16 ? `url(${RamsImgOne})` :
                      quoteId < 24 ? `url(${RamsImgTwo})` :
                      `url(${RamsImgThree})`,
         backgroundSize: 'contain',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         height: '300px',
         width: '320px',
         animation: 'pulse 1.5s infinite'
        }}
  />;
};

export default Rams;
