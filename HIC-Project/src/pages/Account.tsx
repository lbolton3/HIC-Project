import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface User {
  //id: 12345;
  account_number: string
  city: string
  email: string
  first_name: string
  last_name: string
  state: string
  street_name: string
  street_number: string
  zip: string
}

interface AccountProps {
  user: User;
}
const aboutStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%", // Take full width of the viewport
  height: "100vh", // Take full height of the viewport
  display: "flex", // Use Flexbox
  flexDirection: "column", // Stack children vertically
  justifyContent: "center", // Center children horizontally
  alignItems: "left", // Center children vertically
  overflowY: "auto",
};
const titleStyle: React.CSSProperties = {
  //marginBottom: "80px",
  fontSize: "1.5em",
};
const textStyle: React.CSSProperties = {
  //top: 10,
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
  width: "50%", // Adjust as needed
};

const paragraphStyle1: React.CSSProperties = {
  marginLeft: "50px", // Add space between the header and the paragraph
  fontSize: "1.5em",
};

const paragraphStyle2: React.CSSProperties = {
  marginLeft: "110px", // Add space between the header and the paragraph
  fontSize: "1.5em",
};
const AccountDisplay: React.FC<AccountProps> = ({ user }) => {
  return (
    <div className="user">
      <div style={textStyle}>
        <div style={headerStyle}>
          <h2>Name: {user.first_name} {user.last_name}</h2>

        </div>
      </div>
      <div style={textStyle}>
        <div style={headerStyle}>
          <h2>Account Number: {user.account_number}</h2>

        </div>
      </div>
      <div style={textStyle}>
        <div style={headerStyle}>
          <h2>Address: {user.street_number} {user.street_name} {user.city} {user.state} {user.zip}</h2>
        </div>
      </div>
        <div style={textStyle}>
          <div style={headerStyle}>
            <h2>Email: {user.email}</h2>

          </div>
        </div>
    </div>
  );
};


export const About: React.FC = () => {

  const [data, setData] = useState<User | null>(null);
  useEffect(() => {
    fetch('http://localhost:5000/account')
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, []);
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <Header />
      <div style={aboutStyle}>
        <div style={titleStyle}>
          <h1>Your Account</h1>
        </div>

        <AccountDisplay user={data} />

      </div>
      <Footer />
    </div>
  );
};

export default About;
