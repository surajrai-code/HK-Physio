import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="f-main">
      <div className="f-cont">
        <div className="footer">
        <p>Copyright &#169; 2024 HK-PHYSIO-CARE</p>
        </div>
        <div className="secfooter">
          <p>
            Contact Us | 
            <a href="tel:7538897052" style={{textDecoration:'none'}}> 7538897052</a> | 
            <a href="mailto:hkphysiocare@gmail.com" style={{textDecoration:'none'}}> hkphysiocare@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
