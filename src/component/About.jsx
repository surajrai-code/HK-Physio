import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "rgb(0, 151, 158)",
        padding:"2rem 0"
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.2rem",
            color: "white",
            lineHeight: "2rem",
            padding: "1rem",
            fontWeight: "100",
          }}
        >
          Our certified and experienced Physiotherapist have expertise in a wide
          range of specialties which includes neurological
          issues,neuro-musculoskeletal, cardiovascular and respiratory. The
          physiotherapy session our conducted in the comfort of your home.
        </h1>
      </div>
    </div>
  );
};

export default About;
