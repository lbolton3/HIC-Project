import React from 'react';
import Header from '../components/Header';
import '../components/loginHero'
import LoginSection from '../components/loginHero';

const login: React.FC = () => {
    return (
        <>
            <Header />
            <LoginSection />
            <div style={{ paddingTop: '60px', textAlign: 'center' }}> {/* Adjust the padding as necessary */}
                <h1>Login</h1>
                <p>Welcome to the login page!</p>
            </div>
        </>
    );
};

export default login;