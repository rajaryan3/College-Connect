import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/login" id="loginDocId">
        Login
      </NavLink> */}
      <NavLink to="/register" id="registerDocId">
        Register
      </NavLink>
      <NavLink to="/profile" id="profileDocId">
        Profile
      </NavLink>
      <NavLink to="/chat" id="chatDocId">
        Chat
      </NavLink>
      <NavLink to="/resources" id="resourcesDocId">
        Resources
      </NavLink>
      <NavLink to="/addresources" id="addresourcesDocId">
        Add Resources
      </NavLink>
      <NavLink to="/logout" id="logoutDocId">
        LogOut
      </NavLink>
    </div>
  );
}

export default Header;
