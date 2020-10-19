import React from 'react';
import logo from '../../../images/logos/logo.png' 
import './Navbar.css'
function Navbar() {
  const handleSignIn =()=>{
    console.log('click')

  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#"> <img className="image" src={logo} alt="" /> </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 " href="#">Our protfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Our Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white btn btn-dark " href="#"  onClick={handleSignIn}>Login</a>
          </li>

        </ul>

      </div>
    </nav>
  );
}
      
      export default Navbar;