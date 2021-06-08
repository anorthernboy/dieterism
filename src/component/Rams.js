import React from "react";
import "../style/Rams.css";
import RamsImg from "../rams.jpg";
import RamsImgOne from "../rams-one.jpg";
import RamsImgTwo from "../rams-two.jpg";
import RamsImgThree from "../rams-three.jpg";

const Rams = ({ quoteId, click }) => {
  return <div className="rams" onClick={click} 
    style={{
         background: quoteId < 8 ? `url(${RamsImg}) center center / contain no-repeat` :
                      quoteId < 16 ? `url(${RamsImgOne}) center center / contain no-repeat` :
                      quoteId < 24 ? `url(${RamsImgTwo}) center center / contain no-repeat` :
                      `url(${RamsImgThree}) center center / contain no-repeat`,
         height: '300px',
         width: '320px',
         animation: 'pulse 1.5s infinite'
        }}
  />;
};

export default Rams;
