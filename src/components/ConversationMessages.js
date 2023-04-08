import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Footer from "./Footer.js"


const ConversationMessages = ({
  selectedConversation,
  setConversation,
  setSelectedConversation,
  setNewMessageFlag,
}) => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState('');
  const receiverId = selectedConversation.userData[0]._id;


  useEffect(() => {
  // console.log(url);
    const fd = new FormData();
    fd.append("file", url);
    const func = async() => {
      try {
        const res = await axios.post(
          "http://localhost:8000/file/upload",
          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setUrl(res.data.imageUrl);
        setValue(res.data.imageUrl);
        // console.log(url,value);
        // console.log(url);
      } catch (error) {
        console.log(error);
      }
    }
    func();
  }, [url]);


  const sendText = async () => {
    if (!value) return;

    let newmessage = {
      senderId: "64033ea41ca78ed1c90a8363",
      conversationId: selectedConversation.conversationId,
      receiverId: receiverId,
      type: "text",
      content: value,
    };

    const uploadNewMessages = async (message) => {
      try {
        const response = await axios.put(
          "http://localhost:8000/conversation",
          message
        );
        const currUser = {
          user_id: "64033ea41ca78ed1c90a8363",
          conversation_id: selectedConversation.conversationId,
        };
        const response2 = await axios.get(
          "http://localhost:8000/currentConversation",
          { params: currUser }
        );
        setSelectedConversation(response2.data);
      
        console.log(response2.data);
        setNewMessageFlag((prev) => !prev);
      } catch (error) {
        console.error("Error uploading messages:", error);
      }
    };
    uploadNewMessages(newmessage);
    setValue("");
    document.getElementById('inputText').value = '';
    setNewMessageFlag((prev) => !prev);
  };

  const handleBackClick = async () => {
    setSelectedConversation(null);
  };

  

  const userID = "64033ea41ca78ed1c90a8363";
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
              src={selectedConversation.userData[0].photo}
              alt="ChatImg"
            />
          </div>
          <div className="name">
            {selectedConversation.userData[0].first_name}{" "}
            {selectedConversation.userData[0].last_name}
          </div>
          <div className="seen">{selectedConversation.updated_at}</div>
        </div>
        <div className="messages" id="chat">
          {selectedConversation.messages.map((message) =>
            message.senderID === userID ? (
              <div className="message parker" key={message._id}>
                {message.content}
              </div>
            ) : (
              <div className="message stark" key={message._id}>
                {message.content}
              </div>
            )
          )}
        </div>
        <Footer
          sendText={sendText}
          value={value}
          setValue={setValue}
          // setSelectedConversation={setSelectedConversation}
          url={url}
          setUrl={setUrl}
        />
      </div>
    </>
  );
};

export default ConversationMessages;
