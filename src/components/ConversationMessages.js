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
      <div className="chat">
        <a onClick={handleBackClick}>
          <img
            className="backButton"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEbAJdVmJiPY2WZctPNCqXMz0-QcKt_RKdOkmfspTJA&s"
            alt="backButton"
          />
        </a>
        <div className="contact bar">
          <div className="pic">
            <img
              style={{ maxWidth: "100%" }}
              src={conversation.userData[0].photo}
              alt="ChatImg"
            />
          </div>
          <div className="name">{conversation.userData[0].first_name}</div>
          <div className="seen">{conversation.updated_at}</div>
        </div>
        <div className="messages" id="chat">
          {/* <div className="time">
            Today at 11:41
          </div> */}
          {/* <div className="message parker">
            Hey, man! What's up, Mr Stark? 👋
          </div>
          <div className="message stark">
            Kid, where'd you come from?
          </div> */}

          {conversation.messages.map(
            (message) =>
              message.senderID == userID ? (
                <div className="message parker">{message.content}</div>
              ) : (
                <div className="message stark">{message.content}</div>
              )

            // <li key={message._id}>
            //   <p>{message.content}</p>
            //   <p>Created At: {message.createdAt}</p>
            // </li>
          )}
        </div>
        <div onClick={() => {alert('Attachment pressed')}}>
          <img
            className="attachmentButton"
            src="https://cdn-icons-png.flaticon.com/512/74/74741.png"
            style={{ width: "40px", height: "40px" }}
            alt="attachmentButton"
          />
        </div>

        <div className="input">
          <i className="fas fa-camera"></i>
          <i className="far fa-laugh-beam"></i>
          <input
            placeholder="Type your message here!"
            type="text"
            style={{ marginLeft: "20px" }}
          />
          {/* <i className="fas fa-microphone"></i> */}
        </div>

        <div onClick={() => {alert('Send Button pressed')}}>
          <img
            className="sendButton"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqUJwzScnp9AhxynPsWu-tynVihQvwuqukA&usqp=CAU"
            alt="sendButton"
            style={{ width: "45px", height: "32px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ConversationMessages;