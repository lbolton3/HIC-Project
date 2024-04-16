import React from 'react';
import Header from '../components/Header';

const Contact: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>Contact</h1>
          <p>Welcome to the contact page!</p>
        </div>
      </>
    );
  };

export default Contact;