// import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { MainHeader, Home, Login, Register, Profile, Chat, Resources, PostResource, LogOut, MyPosts  } from "./path";
import React from "react";
import './App.css'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="myposts" element={<MyPosts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chat" element={<Chat />} />
            <Route path="resources" element={<Resources />} />
            <Route path="addresources" element={<PostResource />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
 
}

export default App
