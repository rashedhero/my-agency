import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';


import Navbar from '../Navbar/Navbar';


import './Header.css';

const Header = () => {
    return (
        <div className="headr-container">
            
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L1440,0L1440,320L0,320Z"></path></svg>
        </div>
    );
};

export default Header;