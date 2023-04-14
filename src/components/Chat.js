import React, { useState, useEffect } from "react";
import ConversationList from './ConversationList';
import ChatHome from './ChatHome';
import "../styles/chat.css";


const Chat = () => {

  const [showConversationList, setShowConversationList] = useState(false);
  return (
    <div>
      {/* <h1 style={{textAlign:"center"}}>My Chat App</h1> */}
      {/* <ConversationList /> */}

      <div>
        <button
          style={{ width: "150px", height: "20px" }}
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