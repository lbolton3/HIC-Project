import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/loginHero'
import LoginSection from '../components/loginHero';

const login: React.FC = () => {
    return (
        <>
            <Header />
            <LoginSection />
            <Footer />
        </>
    );
};

export default login;
