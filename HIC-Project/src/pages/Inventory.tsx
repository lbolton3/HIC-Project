import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicExample from "../components/Product-Thumbnail";
import ListGroup from 'react-bootstrap/ListGroup';

const Inventory: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (selectedKey: string) => {
    setActiveKey(selectedKey);
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 100px)",
        }}
      >
        <div
          style={{
            flex: "0 0 25%",
            backgroundColor: "#f0f0f0",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <h2>Filter by:</h2>
          <ListGroup as="ul" activeKey={activeKey} onSelect={handleSelect}>
            <ListGroup.Item as="li" eventKey="1">
              Price
            </ListGroup.Item>
            <ListGroup.Item as="li" eventKey="2">
              Brand
            </ListGroup.Item>
            <ListGroup.Item as="li" eventKey="3">
              Year
            </ListGroup.Item>
            <ListGroup.Item as="li" eventKey="4">
              Color
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={{ flex: "1", padding: "20px", paddingLeft: "50px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "100px",
            }}
          >
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
            <BasicExample />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inventory;