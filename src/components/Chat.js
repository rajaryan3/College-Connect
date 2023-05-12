import React, { useState } from "react";
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
        height: "100%",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div>
        {showConversationList ? (
          <button
            type="button"
            class="btn btn-light"
            style={{ marginLeft: "20px", marginTop: "20px" }}
            onClick={() => setShowConversationList(!showConversationList)}
            id="allConvBTn"
          >
            Back to ChatHome
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-light"
            style={{ marginLeft: "20px", marginTop: "20px" }}
            onClick={() => setShowConversationList(!showConversationList)}
            id="allConvBTn"
          >
            Previous Conversations
          </button>
        )}
        {showConversationList && <ConversationList />}
      </div>

      {!showConversationList && <ChatHome />}
    </div>
  );
};

export default Chat;