import React from "react";

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     imageUrl: string;
// }

// interface ProductDisplayProps {
//     product: Product;
// }

// const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
//     return (
//         <div className="product">
//             <img src={product.imageUrl} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//         </div>
//     );
// };

const ProductDisplay: React.FC = () => {
  return (
    <div className="product">
      <img src="Tmp product image" alt="Tmp product image" />
      <h3>Tmp car</h3>
      <p>$1000</p>
    </div>
  );
};

export default ProductDisplay;
