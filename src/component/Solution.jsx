import React from 'react';
import './Solution.css';

const Solution = () => {
  const handleBookNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="main-sol">
      <div className="sol-left">
        <h1>PHYSIOTHERAPY SOLUTIONS</h1>
        <div className='sol-item'>
          <div className="row">
            <div className="button">Orthopedic Physiotherapy</div>
            <div className="button">Sports Injury Physiotherapy</div>
            <div className="button">Post-Operative Physiotherapy</div>
            <div className="button">Neurological Physiotherapy</div>
          </div>
          <div className="row">
            <div className="button">Paediatric Physiotherapy</div>
            <div className="button">Physiotherapy For Elderly</div>
            <div className="button">Ergonomics Session</div>
           
          </div>
          <div className="row">
          <div className="button">Gynaecology Physiotherapy Service</div>
          </div>
        </div>
        <button className="book-now" onClick={handleBookNowClick}>ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default Solution;
