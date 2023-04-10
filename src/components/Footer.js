import React, { useRef } from "react";
// import axios from 'axios';

const Footer = ({ sendText, value, setValue, url, setUrl }) => {
  const inputTextRef = useRef(null);
  const inputFileRef = useRef(null);

  const handleSendClick = async () => {
    sendText();
    // setValue("");
    inputTextRef.current.value = "";
    inputFileRef.current.value = null;
  };

  const handleFileChange = async (event) => {
    setUrl(event.target.files[0]);
  };

  return (
    <>
      <div>
        <input
          type="file"
          ref={inputFileRef}
          onChange={handleFileChange}
          //   style={{
          //     className: "attachmentButton",
          //     background: `url(https://cdn-icons-png.flaticon.com/512/74/74741.png) no-repeat center center`,
          //     width: "40px",
          //     height: "40px",
          //   }}
        />

        <div
          class="input"
          inputprops={{ "aria-label": "search" }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          id="inputText"
        >
          <i class="fas fa-camera"></i>
          <i class="far fa-laugh-beam"></i>
          <input
            placeholder="Type your message here!"
            type="text"
            ref={inputTextRef}
            style={{ marginLeft: "20px" }}
          />
          <i class="fas fa-microphone"></i>
        </div>
        {/* <img class="sendButton" src="./sendButton.png" alt="sendButton" /> */}
        {/* <img
          class="sendButton"
          src="sendButton.png"
          alt="sendButton"
          onClick={handleSendClick}
        /> */}
        <img
          className="sendButton"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqUJwzScnp9AhxynPsWu-tynVihQvwuqukA&usqp=CAU"
          alt="sendButton"
          style={{ width: "45px", height: "32px" }}
          onClick={handleSendClick}
        />
      </div>
    </>
  );
};

export default Footer;
