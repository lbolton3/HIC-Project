import React from 'react';
import Header from '../components/Header';

const Account: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>Account</h1>
          <p>Welcome to the Account page!</p>
        </div>
      </>
    );
  };

export default Account;