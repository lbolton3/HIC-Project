import React from 'react';
import Header from '../components/Header';
import '../components/loginHero';
import LoginSection from '../components/loginHero';

const Login: React.FC = () => {
    return (
        <>
            <Header />
            <LoginSection />
            <section className="login">
                <div className="login-content">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
