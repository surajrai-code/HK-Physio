import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './HeroSection.css';
import logo from '../Logo/logo.jpg';
import headhome from '../Logo/headhome.jpg';
import herosection from '../Logo/herosection.jpg';

const Header = () => (
  <header className="main-header">
    <div className="main-logo">
      <img src={logo} alt="Company Logo" />
    </div>
  </header>
);

const HeroImage = () => (
  <div className="hero-img">
    <img src={herosection} alt="Hero Section" />
  </div>
);

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    city: '',
    termsAccepted: false,
  });

  const cities = [
   'Chennai','Bangalore','Vellore', 'Tiruvarur','Salem', 'Pondicherry', 'Gingee', 'Hosur', 'Krishnagiri', 'Pudukottai'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nbkwv4v',
      'template_addeicw',
      e.target,
      'huAidzDD7U6kzNs-G'
    ).then((result) => {
      console.log(result.text);
      alert('Form sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send form.');
    });
  };

  return (
    <div className="hero-form">
      <div className="hero-header">
        <img src={headhome} alt="Header Home" />
        <h1 className="hero-title">PHYSIOTHERAPY <span>AT HOME</span></h1>
      </div>
      <div className="form-container">
        <h1 className="form-title">SCHEDULE YOUR SESSION</h1>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input-text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Your Number"
            className="input-text"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <select
            name="city"
            className="input-text"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
          <button type="submit" className="submit-button">ENQUIRE NOW</button>
        </form>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <div className="main-hero">
    <div className="main-content">
      <Header />
      <div className="hero-content">
        <HeroImage />
        <HeroForm />
      </div>
    </div>
  </div>
);

export default HeroSection;
