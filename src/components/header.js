import React from "react";
import { Link } from "react-router-dom";
import './header.css';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (

 
       <header class="backgroundTop">
    <div class="container text-center">
      <h1>VICTORIA HUNTER</h1>
      <p class="lead">Welcome to my portfolio! </p> </div>
</header>
  );

}

export default Header;
