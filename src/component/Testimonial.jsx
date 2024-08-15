import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Junaid Shaikh",
    location: "Chennai",
    quote:
      "My physio helped me regain my mobility in my lower back after a gym mishap. He was excellent!1 He was extremely knowledgeable, answered all of my question, and made a significant difference in my lower back pain. He was a total professional physio. I would recommend him",
  },
  {
    name: "Ram",
    location: "Chennai",
    quote:
      "Dr. Lavanya has excellent therapy skills and she understands the problems first and then applies the required therapy techniques. She has great commitment and dedication towards her work and customers. Thank you very much for your time treating my mother, it was very much fruitful for her to recover fast.",
  },
  
];

const Testimonial = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h1 style={{color:'white'}}>TESTIMONIAL</h1>
        <div className="testimonials-cnt">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
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
