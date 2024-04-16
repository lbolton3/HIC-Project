import React from 'react';
import Header from '../components/Header';

const Inventory: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>Inventory</h1>
          <p>Welcome to the Inventory page!</p>
        </div>
      </>
    );
  };

export default Inventory;