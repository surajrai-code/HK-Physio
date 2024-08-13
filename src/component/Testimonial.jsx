import React from "react";
import "./Testimonial.css";

import pic1 from "../Logo/pic1.jpg";
import pic2 from "../Logo/pic2.jpg";

const testimonials = [
  {
    name: "Shirley Fultz",
    location: "Delhi",
    quote:
      "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
    image: pic1,
  },
  {
    name: "Daniel Keystone",
    location: "Bangalore",
    quote:
      "The simple and intuitive design makes it easy for me to use. I highly recommend Fetch to my peers.",
    image: pic2,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h1>Testimonial</h1>
        <div className="testimonials-cnt">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <p className="testimonial-role">
                  <span className="testimonial-name">{testimonial.name}</span> -{" "}
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
