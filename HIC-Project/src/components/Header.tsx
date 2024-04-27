import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    position: "fixed", // Fixed positioning relative to the viewport
    top: 0, // Align to the top of the viewport
    width: "100%", // Take full width of the viewport
    zIndex: 1000, // Ensure it stays on top of other content
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={headerStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TotallyRealCarSales
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inventory">
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                Your Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
<<<<<<< Updated upstream
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                login
=======
            {/* Add Login and Signup Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
>>>>>>> Stashed changes
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;






// import React from "react";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   const headerStyle: React.CSSProperties = {
//     position: "fixed", // Fixed positioning relative to the viewport
//     top: 0, // Align to the top of the viewport
//     width: "100%", // Take full width of the viewport
//     zIndex: 1000, // Ensure it stays on top of other content
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-body-tertiary"
//       style={headerStyle}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           TotallyRealCarSales
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact-us">
//                 Contact Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/inventory">
//                 Inventory
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/account">
//                 Your Account
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 Cart
//               </Link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
