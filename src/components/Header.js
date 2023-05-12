import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Header = () => {

  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));


  return (
    <div
      className="header"
      style={{
        backgroundColor: "#edf2fb",
      }}
    >
      {/* <NavLink to="/login" id="loginDocId">
        Login
      </NavLink> */}
      {/* <NavLink to="/register" id="registerDocId">
        Register
      </NavLink> */}

      <div
        style={{
          width: "80%",
          display: "flex",
          fontColor: "white",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-home-house-building-page-city-casa-old-vintage-46266.png?f=avif&w=512"
            alt=""
            width="22px"
            height="22px"
          />
          <NavLink to="/" id="homeDocId">
            <strong>Home</strong>
          </NavLink>
        </div>

        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-profile-287-460516.png?f=avif&w=512"
            alt=""
            width="22px"
            height="22px"
          />
          <NavLink to="/profile" id="profileDocId">
            <strong>Profile</strong>
          </NavLink>
        </div>

        <div>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/chat-bubble-5569670-4760397.png?f=avif&w=512"
            width="22px"
            height="22px"
            alt=""
          />
          <NavLink to="/chat" id="chatDocId">
            <strong>Chat</strong>
          </NavLink>
        </div>

        <div>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/learning-6532060-5475014.png?f=avif&w=512"
            alt=""
            width="22px"
            height="22px"
          />
          <NavLink to="/resources" id="resourcesDocId">
            <strong>Resources</strong>
          </NavLink>
        </div>

        {userObj.user_role === 'CR' && 
        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-add-1470-475065.png?f=avif&w=512"
            alt="addresources"
            width="22px"
            height="22px"
          />
          <NavLink to="/addresources" id="addresourcesDocId">
            <strong>Add Resources</strong>
          </NavLink>
        </div>
        }
        
        <div>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/logout-3028583-2521684.png?f=avif&w=512"
            alt="logout"
            width="22px"
            height="22px"
          />
          <NavLink to="/logout" id="logoutDocId">
            <strong>LogOut</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
