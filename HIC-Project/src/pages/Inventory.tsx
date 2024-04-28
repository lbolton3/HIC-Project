import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import get_data from "../../backend/app.py"
//import ProductDisplay from "../components/Product-Display";
//import Product from "../components/Product-Display";
//import { get_data } from "../../backend/app";
interface Product {
  //id: 12345;
  name: string;
  price: number;
  imageUrl: string;
}
//let myNum = get_data();

interface ProductDisplayProps {
  product: Product;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
      <div className="product">
          <img src={product.imageUrl} width={"300"} height={"200"} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
      </div>
  );
};


//export default ProductDisplay;

const Inventory: React.FC = () => {
  //const [data, setData] = useState<Product>({ name: "exploerer", price: 0 });
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/inventory')
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, []);
  
  // const product: Product = {
  //   name: data[1].name,
  //   price: data[1].price,
  // };
  //console.log(data.name);
  return (
    
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "calc(100vh - 100px)",

        }}
      >
        <div
          style={{
            flex: "0 0 20%",
            backgroundColor: "#f0f0f0",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <h2>Filter by:</h2>
          <ul>
            <li>Price</li>
            <li>Color</li>
            <li>Year</li>
            <li>Make</li>
            <li>Model</li>
          </ul>
        </div>
        <div style={{ flex: "1", width: "100%", padding: "20px", marginLeft: "50px", overflowY: "auto", overflowX: "hidden"}}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "50px",
              
            }}
          >
            {data.map (val => <ProductDisplay product = {val}/> )} 

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Inventory;

// const Inventory: React.FC = () => {
//   const [data, setData] = useState<Product | null>(null);

//   useEffect(() => {
//     fetch('/inventory')
//       .then(response => response.json())
//       .then(mydata => setData(mydata));
//   }, []);

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           height: "calc(100vh - 100px)",
//         }}
//       >
//         <div
//           style={{
//             flex: "0 0 25%",
//             backgroundColor: "#f0f0f0",
//             paddingTop: "20px",
//             paddingLeft: "50px",
//             paddingRight: "50px",
//           }}
//         >
//           <h2>Filter by:</h2>
//           <ul>
//             <li>Price</li>
//             <li>Color</li>
//             <li>Year</li>
//             <li>Make</li>
//             <li>Model</li>
//           </ul>
//         </div>
//         <div style={{ flex: "1", padding: "20px", paddingLeft: "50px" }}>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "100px",
//             }}
//           >
//             {data && <ProductDisplay product={data} />}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

//export default Inventory;



