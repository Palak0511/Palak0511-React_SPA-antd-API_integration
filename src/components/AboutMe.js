import React from "react";

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        Techon Dater Systems, your partner in software innovation, has spent 25 years propelling businesses forward with custom software solutions. We aid SMEs, startups, and enterprises by enhancing their operations with bespoke product designs, QA, and consultancy. <br /> We excel in serving engineering and tech firms, delivering end-to-end software solutions that are innovative, efficient, and precisely aligned with your needs.
      </p>
      <p style={sectionHeadingStyle}>Our Mission:</p>
      <p style={paragraphStyle}>
        “To revolutionize industries through cutting-edge innovation, empowering businesses worldwide with transformative technology solutions.”
      </p>
      <p style={sectionHeadingStyle}>Our Vision:</p>
      <p style={paragraphStyle}>
        “To be the global leader in digital transformation, driving positive change and shaping a sustainable future for organizations and communities.”
      </p>
      <p style={sectionHeadingStyle}>Our Strategy:</p>
      <p style={paragraphStyle}>
        “We strategically align our expertise and resources to deliver world-class software products and services, continuously pushing the boundaries of innovation.”
      </p>
      <p style={sectionHeadingStyle}>Our Philosophy:</p>
      <p style={paragraphStyle}>
        “At Techon Dater Systems, we believe in fostering a culture of creativity, collaboration, and excellence, inspiring our team to deliver unparalleled value to our clients, consistently exceeding expectations.”
      </p>
    </div>
  );
};

const containerStyle = {
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
  lineHeight: "1.6",
};

const paragraphStyle = {
  marginBottom: "15px",
};

const sectionHeadingStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  marginBottom: "8px",
};

export default AboutMe;
