import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDisplay from '../components/Product-Display';

const Product: React.FC = () => {
    return (
      <>
      <Header />
        <div style={{ marginLeft: '425px' }}>
          <ProductDisplay />
        </div>
      <Footer />
      </>
    );
  };

export default Product;