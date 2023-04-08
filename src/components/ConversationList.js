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
          <h1>User-Contact List</h1>
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
          <div class="center">
            <div class="contacts">
              <i class="fas fa-bars fa-2x"></i>
              <h2>
                Contacts
              </h2>
              {/* <a href="./chat.html">
                <div class="contact">
                  <div class="pic rogers"></div>
                  <div class="badge">
                    14
                  </div>
                  <div class="name">
                    Steve Rogers
                  </div>
                  <div class="message">
                    That is America's ass 🇺🇸🍑
                  </div>
                </div>
              </a> */}

              {conversations.map((conversation) => (
                <a key={conversation.userData[0]._id} onClick={() => handleConversationClick(conversation)} >
                  <div class="contact">
                    <div class="pic"><img style={{backgroundImage : `{conversation.userData[0].photo}`}} alt="Example Image" /></div>
                    <div class="badge">
                      14
                    </div>
                    <div class="name">
                      {conversation.userData[0].first_name}{' '}
                      {conversation.userData[0].last_name}
                    </div>
                    <div class="message">
                      {conversation.last_message}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ConversationList;