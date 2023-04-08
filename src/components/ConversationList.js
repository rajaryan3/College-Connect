import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import ConversationMessages from './ConversationMessages';

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);



  useEffect(() => {
    const userData = { id: "64033ea41ca78ed1c90a8363" }
    const fetchConversations = async () => {
      try {
        const response = await axios.get("http://localhost:8000/conversation", {
          params: userData,
        });
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div>
      {selectedConversation ? (
        <ConversationMessages
          conversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />
      ) : (
        <>
          {/* <h1>User-Contact List</h1> */}
          {/* <ul>
            {conversations.map((conversation) => (
              <li key={conversation.userData[0]._id}>
                <h2>
                  {conversation.userData[0].first_name}{' '}
                  {conversation.userData[0].last_name}
                </h2>
                <p>Last Message: {conversation.last_message}</p>
                <button
                  onClick={() => handleConversationClick(conversation)}
                >
                  View Messages
                </button>
              </li>
            ))}
          </ul> */}
          <div className="center">
            <div className="contacts" style={{display:"flex", flexDirection:"column", minWidth:"700px"}}>
              <i className="fas fa-bars fa-2x"></i>
              <h2 style={{textAlign:"center"}}>Contacts</h2>
              {/* <a href="./chat.html">
                <div className="contact">
                  <div className="pic rogers"></div>
                  <div className="badge">
                    14
                  </div>
                  <div className="name">
                    Steve Rogers
                  </div>
                  <div className="message">
                    That is America's ass 🇺🇸🍑
                  </div>
                </div>
              </a> */}

              {conversations.map((conversation) => (
                <button
                  style={{marginBottom:"15px"}}
                  key={conversation.userData[0]._id}
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="contact">
                    <div className="pic">
                      <img
                        src={conversation.userData[0].photo}
                        style={{maxWidth:"100%"}}
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