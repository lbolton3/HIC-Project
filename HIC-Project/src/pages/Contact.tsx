import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'react-bootstrap/Image';

export const About: React.FC = () => {
  const aboutStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100%", // Take full width of the viewport
    height: "100vh", // Take full height of the viewport
    display: "flex", // Use Flexbox
    flexDirection: "column", // Stack children vertically
    justifyContent: "center", // Center children horizontally
    alignItems: "center", // Center children vertically
  };

  const titleStyle: React.CSSProperties = {
    // marginBottom: "80px",
    fontSize: "1.5em",
  };

  const textStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginTop: "20px",
    width: "80%", // Adjust as needed
    height: "200px", // Adjust as needed
    // marginBottom: "50px",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // Stack children horizontally
    justifyContent: "flex-start", // Center children horizontally
    width: "80%", // Adjust as needed
  };

  const paragraphStyle1: React.CSSProperties = {
    marginLeft: "50px", // Add space between the header and the paragraph
    fontSize: "1.5em",
  };

  const paragraphStyle2: React.CSSProperties = {
    marginLeft: "140px", // Add space between the header and the paragraph
    fontSize: "1.5em",
  };

  return (
    <div>
      <Header />
      <div style={aboutStyle}>
        <div style={titleStyle}>
          {" "}
          <h1>Contact</h1>
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Have Questions?</h2>
            <p style={paragraphStyle1}>You can contact one of our representative via
            email at realcars@gmail.com or call us at 111-111-1111</p>
          </div>
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Follow Us</h2>
            <p style={paragraphStyle2}>If you are having any trouble with recieving one
            of our cars, want to comment about our level of service, or just want to stay
            updated on anything TotallyRealCarSales, follow us on social media for some
            great content.</p>
          </div>
          <Image src="src\assets\Media.webp" rounded style={{ width: '200px', height: '200px' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
