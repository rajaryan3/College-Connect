import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import ConversationMessages from "./ConversationMessages";

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [NewMessageFlag, setNewMessageFlag] = useState(null);

  useEffect(() => {
    const userData = { id: "64033ea41ca78ed1c90a8363" };
    const fetchConversations = async () => {
      try {
        const response = await axios.get("http://localhost:8000/conversation", {
          params: userData,
        });
        setConversations(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [NewMessageFlag]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div>
      {selectedConversation ? (
        <ConversationMessages
          selectedConversation={selectedConversation}
          setConversation={setConversations}
          setSelectedConversation={setSelectedConversation}
          setNewMessageFlag={setNewMessageFlag}
        />
      ) : (
        <>
          
          <div className="center">
            <div
              className="contacts"
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "700px",
              }}
            >
              <i className="fas fa-bars fa-2x"></i>
              <h2 style={{ textAlign: "center" }}>Contacts</h2>

              {conversations.map((conversation) => (
                <button
                  style={{ marginBottom: "15px" }}
                  key={conversation.userData[0]._id}
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="contact">
                    <div className="pic">
                      <img
                        src={conversation.userData[0].photo}
                        style={{ maxWidth: "100%" }}
                        alt="Example"
                      />
                    </div>
                    {/* <div className="badge">14</div> */}
                    <div className="name">
                      {conversation.userData[0].first_name}{" "}
                      {conversation.userData[0].last_name}
                    </div>
                    <div className="message">{conversation.last_message}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ConversationList;