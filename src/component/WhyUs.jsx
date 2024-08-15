import React from 'react';
import './WhyUs.css';
import pic1 from '../Logo/pic1.jpg';
import pic2 from '../Logo/pic2.jpg';
import pic3 from '../Logo/pic3.jpg';
import pic4 from '../Logo/pic4.jpg';
import pic5 from '../Logo/pic5.jpg';
import pic6 from '../Logo/pic6.jpg';

const features = [
  "Expert physiotherapists",
  "Personalized care",
  "Convenience & cost effectiveness",
  "Faster healing process",
  "Better time management",
  "Improved quality of life"
];


const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const Feature = ({ text, imgSrc }) => (
  <div className="feature">
    <div className="icon">
      <img src={imgSrc} alt="Icon" />
    </div>
    <div className="text">{text}</div>
  </div>
);

const WhyUs = () => {
  const handleBookNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="container">
      <div className="why-cont">
        <h1>WHY CHOOSE HK-PHYSIO-CARE?</h1>
        <div className="features">
          {features.map((feature, index) => (
            <Feature key={index} text={feature} imgSrc={images[index]} />
          ))}
        </div>
        <button className="book-now" onClick={handleBookNowClick}>ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default WhyUs;
