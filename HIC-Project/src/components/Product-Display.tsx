import React from "react";


interface Product {
    id: 12345;
    name: "Explorer";
    price: 1200;
    //imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autoblog.com%2Fbuy%2F2023-Ford-Explorer%2F&psig=AOvVaw1JQ3353Q_Y8bMpDmtINWkR&ust=1714069832996000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND3pe6924UDFQAAAAAdAAAAABAE";
  }
interface ProductDisplayProps {
    product: Product;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
    return (
        <div className="product">
            {/* <img src={product.imageUrl} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    );
};

// const ProductDisplay: React.FC = () => {
//   return (
//     <div className="product">
//       <img src="Tmp product image" alt="Tmp product image" />
//       <h3>Tmp car</h3>
//       <p>$2000</p>
//     </div>
//   );
// };

export default ProductDisplay;
