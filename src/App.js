// import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { MainHeader, Home, Login, Register, Profile, Chat, Resources, PostResources  } from "./path";
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="resources" element={<Resources />} />
          <Route path="addresources" element={<PostResources/>}/>
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
 
}

export default App
