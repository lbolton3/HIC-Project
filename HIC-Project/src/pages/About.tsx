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
    fontSize: "1.25em",
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
    marginLeft: "65px", // Add space between the header and the paragraph
    fontSize: "1.25em",
  };

  const paragraphStyle2: React.CSSProperties = {
    marginLeft: "100px", // Add space between the header and the paragraph
    fontSize: "1.25em",
  };

  const paragraphStyle3: React.CSSProperties = {
    marginLeft: "130px", // Add space between the header and the paragraph
    fontSize: "1.25em",
  };

  return (
    <div style={{ overflowY: "scroll" }}>
      <Header />
      <div style={aboutStyle}>
        <div style={titleStyle}>
          {" "}
          <h1>About</h1>
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Founded in 1999</h2>
            <p style={paragraphStyle1}>TotallyRealCarSales was founded in 1999
            by a small group of computer science majors dedicated to completing a group
            project. We assure you the highest quality cas on the market.</p>
          </div>
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Our Vision</h2>
            <p style={paragraphStyle2}>We hope to deliver the highest quality of online car shopping
            we can so that people can spend less time buying cars and move with their
            friends and family.</p>
          </div>
          <Image src="src\assets\Vision.png" rounded style={{ width: '250px', height: '175px' }} />
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Our CEO</h2>
            <p style={paragraphStyle3}>Our CEO has been working on the development of
            TotallyRealCarSales since 1995 with a successful launch in 1999 where the
            company grew 5 times its original size with a profit of $1.</p>
          </div>
          <Image src="src\assets\CEO.jpg" rounded style={{ width: '200px', height: '250px' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
