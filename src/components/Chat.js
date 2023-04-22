import React, { useState, useEffect } from "react";
import ConversationList from './ConversationList';
import ChatHome from './ChatHome';
import "../styles/chat.css";


const Chat = () => {

  const [showConversationList, setShowConversationList] = useState(false);
  return (
    <div
      style={{
        background:
          "linear-gradient(120deg, hsla(120, 93%, 84%, 1) 0%, hsla(185, 90%, 51%, 1) 100%)",
      }}
    >
      {/* <h1 style={{textAlign:"center"}}>My Chat App</h1> */}
      {/* <ConversationList /> */}

      <div>
       
        <button
          type="button"
          class="btn btn-light"
          style={{marginLeft:"20px", marginTop:"20px"}}
          onClick={() => setShowConversationList(!showConversationList)}
        >
          All Conversations
        </button>
        {showConversationList && <ConversationList />}
      </div>
      {/* <button style={{width:"150px",height:"20px"}} onClick={() => <ConversationList/>}>All Conversations</button> */}
      {/* <ConversationList/> */}

      {!showConversationList && <ChatHome />}
    </div>
  );
};

export default Chat;