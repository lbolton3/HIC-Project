import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
    return (
      <>
        <Header />
        <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
          <h1>About</h1>
          <p>Welcome to the about page!</p>
        </div>
      </>
    );
  };

export default About;