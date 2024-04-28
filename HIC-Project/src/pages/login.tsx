import React, { useEffect,useState } from "react";
import Header from '../components/Header';
import '../components/loginHero';
import LoginSection from '../components/loginHero';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login: React.FC = () => {
    //const [data, setData] = useState("");
    // useEffect(() => {
    //     fetch('http://localhost:5000/login')
    //       .then(response => response.json())
    //       .then(responseData => setData(responseData));
    //   }, []);
    

    return (
        <>
            <Header />
            <LoginSection />
        </>
        
    );
};

export default Login;
