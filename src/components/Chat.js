import React, { useState, useEffect } from "react";
import ConversationList from './ConversationList';
import "../styles/chat.css"


const Chat = () => {
  return (
    <div>
      {/* <h1 style={{textAlign:"center"}}>My Chat App</h1> */}
      <ConversationList />
    </div>
  );
};

export default Chat;