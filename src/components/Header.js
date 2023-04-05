import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/chat'>Chat</NavLink>
        <NavLink to='/resources'>Resources</NavLink>
    </div>
  );
}

export default Header;
