import React from "react";
import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    

    
  //   <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  //   <div className="container">
  //   <Link className="navbar-brand js-scroll-trigger" to="/">
  //       Victoria Hunter
  //     </Link>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //   </button>
  //     <div className="collapse navbar-collapse" id="navbarResponsive">
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#about">About Me</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#services">Portfolio</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     Pupster
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/" || window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About Me
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/portfolio"
    //           className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //         >
    //           Portfolio
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
  <div className="container-fluid">
    <Link className="navbar-brand js-scroll-trigger" to="/">Victoria Hunter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link" smooth={true}
          spy={true}
          >Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>

      </ul>

    </div>
  </div>
 </nav>
  );
}

export default Navbar;
