import { useNavigate } from 'react-router-dom';
import './login.css'

const LoginSection = () => {
    const navigate = useNavigate();
    return (
        
        <section className="login">
                <div className="login-content">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <form onSubmit = {()=>navigate("/account")}>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </form>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password" />
                    </div> */}
                </div>
            </section>
    );
};

export default LoginSection;
