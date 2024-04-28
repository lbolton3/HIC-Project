import './login.css'

const LoginSection = () => {
    return (
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
    );
};

export default LoginSection;
