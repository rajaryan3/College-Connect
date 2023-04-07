import React from "react";

const ConversationMessages = ({ conversation, setSelectedConversation }) => {
  const handleBackClick = () => {
    setSelectedConversation(null); // Call setSelectedConversation with null to reset selectedConversation state
  };

  return (
    <div>
      <h1>Messages</h1>
      <button onClick={handleBackClick}>Back</button>
      <ul>
        {conversation.messages.map((message) => (
          <li key={message._id}>
            <p>{message.content}</p>
            <p>Seen By: {message.seenBy.join(', ')}</p>
            <p>Created At: {message.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationMessages;