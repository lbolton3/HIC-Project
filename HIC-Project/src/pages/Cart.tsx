import React from 'react';
import Header from '../components/Header';

const Cart: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>Cart</h1>
          <p>Welcome to the Cart page!</p>
        </div>
      </>
    );
  };

export default Cart;