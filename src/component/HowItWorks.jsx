import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa6";
import { TbPhysotherapist } from "react-icons/tb";
import "./HowItWorks.css";

const HowItWorks = () => {
  const handleBookNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="how-it-works">
      <div className="cnt">
        <h1>HOW DOES IT WORK?</h1>
        <div className="steps">
          <div className="step">
            <div className="icon-container">
              <FaHeadset size={50}/>
            </div>
            <p>Assessment On Call</p>
          </div>
          <div className="step">
            <div className="icon-container">
              <TbPhysotherapist size={50} />
            </div>
            <p>Book A Session</p>
          </div>
          <div className="step">
            <div className="icon-container">
              <SlCalender size={50} />
            </div>
            <p>Physiotherapist Visit</p>
          </div>
          <div className="step">
            <div className="icon-container">
              <GiNotebook size={50} />
            </div>
            <p>Physiotherapist Creates Treatment Plan</p>
          </div>
        </div>
        <button className="book-now" onClick={handleBookNowClick}>ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default HowItWorks;
