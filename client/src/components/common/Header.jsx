import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => (
    <div className='header'>
      <img src={logo} alt='Logo' className='header-logo'/>
      <h1 className='header-logo'>Cryptolyzer</h1>
    </div>
);

export default Header;
