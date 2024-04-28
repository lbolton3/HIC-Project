import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDisplay from "../components/Product-Display";

const Inventory: React.FC = () => {
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
        {" "}
        {/* Add width: '100%' */}
        <div
          style={{
            flex: "0 0 25%",
            backgroundColor: "#f0f0f0",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          {/* Sidebar */}
          <h2>Filter by:</h2>
          <ul>
            <li>Price</li>
            <li>Color</li>
            <li>Year</li>
            <li>Make</li>
            <li>Model</li>
            {/* Add more filter options here */}
          </ul>
        </div>
        <div style={{ flex: "1", padding: "20px", paddingLeft: "50px" }}>
          {" "}
          {/* Add paddingLeft to match the sidebar's paddingRight */}
          {/* Product grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "100px",
            }}
          >
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            <ProductDisplay />
            {/* Add more ProductDisplay components here */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inventory;
