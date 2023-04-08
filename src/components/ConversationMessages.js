import React from "react";

const ConversationMessages = ({ conversation, setSelectedConversation , }) => {
  const handleBackClick = () => {
    setSelectedConversation(null); // Call setSelectedConversation with null to reset selectedConversation state
  };

  const userID = "64033ea41ca78ed1c90a8363"
  console.log(conversation)

  // <div>
  //   <h1>Messages</h1>
  //   <button onClick={handleBackClick}>Back</button>
  //   <ul>
  //     {conversation.messages.map((message) => (
  //       <li key={message._id}>
  //         <p>{message.content}</p>
  //         <p>Seen By: {message.seenBy.join(', ')}</p>
  //         <p>Created At: {message.createdAt}</p>
  //       </li>
  //     ))}
  //   </ul>
  // </div>


  //----------------------------------------------------------------------------------------
  // <div>
  //   <h1>Messages</h1>
  //   <button onClick={handleBackClick}>Back</button>
  //   <ul>
  //     {conversation.messages.map((message) => (
  //       <li key={message._id}>
  //         <p>{message.content}</p>
  //         <p>Seen By: {message.seenBy.join(', ')}</p>
  //         <p>Created At: {message.createdAt}</p>
  //       </li>
  //     ))}
  //   </ul>
  // </div>
  return (
    <>
      <div class="chat">
        <a onClick={handleBackClick}>
          <img class="backButton" src="backButton.png" alt="backButton" />
        </a>
        <div class="contact bar">
          <div class="pic"><img src={conversation.userData[0].photo}/></div>
          <div class="name">
            {conversation.userData[0].first_name}
          </div>
          <div class="seen">
            {conversation.updated_at}
          </div>
        </div>
        <div class="messages" id="chat">
          {/* <div class="time">
            Today at 11:41
          </div> */}
          {/* <div class="message parker">
            Hey, man! What's up, Mr Stark? 👋
          </div>
          <div class="message stark">
            Kid, where'd you come from?
          </div> */}

          {conversation.messages.map((message) => (

            message.senderID == userID ?
              <div class="message parker">
                {message.content}
              </div>
              :
              <div class="message stark">
                {message.content}
              </div>

            // <li key={message._id}>
            //   <p>{message.content}</p>
            //   <p>Created At: {message.createdAt}</p>
            // </li>
          ))}

        </div>
        <img class="attachmentButton" src="./attachmentButton.png" alt="attachmentButton" />
        <div class="input">
          <i class="fas fa-camera"></i><i class="far fa-laugh-beam"></i><input placeholder="Type your message here!"
            type="text" /><i class="fas fa-microphone"></i>
        </div>
        <img class="sendButton" src="./sendButton.png" alt="sendButton" />
      </div>
    </>
  );
};

export default ConversationMessages;