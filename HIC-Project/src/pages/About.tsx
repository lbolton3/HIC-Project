import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const About: React.FC = () => {
  const aboutStyle: React.CSSProperties = {
    width: "100%", // Take full width of the viewport
    minHeight: "100vh", // Take full height of the viewport
    display: "flex", // Use Flexbox
    flexDirection: "column", // Stack children vertically
    alignItems: "center", // Center children horizontally
    padding: "50px",
    boxSizing: "border-box", // Include padding in the width calculation
    overflowY: "auto",
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
    width: "100%", // Adjust as needed
    height: "200px", // Adjust as needed
    // marginBottom: "50px",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // Stack children horizontally
    justifyContent: "flex-start", // Center children horizontally
    width: "50%", // Adjust as needed
  };

  const paragraphStyle1: React.CSSProperties = {
    marginLeft: "50px", // Add space between the header and the paragraph
    fontSize: "1.5em",
  };

  const paragraphStyle2: React.CSSProperties = {
    marginLeft: "30px", // Add space between the header and the paragraph
    fontSize: "1.5em",
  };

  const paragraphStyle3: React.CSSProperties = {
    marginLeft: "195px", // Add space between the header and the paragraph
    fontSize: "1.5em",
  };

  return (
    <div>
      <Header />
      <div style={aboutStyle}>
        <div style={titleStyle}>
          {" "}
          <h1>About</h1>
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Founded in 1999</h2>
            <p style={paragraphStyle1}>Totally Real Cars Sales was founded in 1999 by a group of computer science majors dedicated to completeing a group project. We assure you the highest quality cars on the market!</p>
          </div>
          {/* <img src="path_to_your_image" alt="Founded Date" /> */}
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Our Vision</h2>
            <p style={paragraphStyle2}>We Hope to deliver the highest quality online car we can so that people can spend less time buying cars and more time with frinds and family!</p>
          </div>
          {/* <img src="path_to_your_image" alt="Vision Message" /> */}
        </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>CEO</h2>
            <p style={paragraphStyle3}>Our CEO has been working on the development of TotallyRealCarSales since 1995 with a successful launch in 1999, it grew 5 times bigger with a profit of $1</p>
          </div>
          <img src="../assets/myImage.JPG" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
