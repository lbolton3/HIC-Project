import './hero.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="hero">
            <video autoPlay loop muted>
                <source src="/car.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1>Welcome to TotallyRealCars.Com</h1>
                <p>We have amazing deals on Cars, trucks, and tanks!</p>
                <Link to="/inventory" className="cta-link">
                    <button className="cta-button">Explore Now</button>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;







// import './hero.css'

// const HeroSection = () => {
//     return (
//         <section className="hero">
//             <div className="hero-content">
//                 <h1>Welcome to Our Website</h1>
//                 <p>Discover amazing products that will change your life.</p>
//                 <button className="cta-button">Explore Now</button>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
