import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>Home</h1>
          <p>Welcome to the home page!</p>
        </div>
      </>
    );
  };

export default Home;