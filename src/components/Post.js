import React, { useState, useEffect } from "react";
// import mongoose from 'mongoose';
import axios from "axios";
// import TextBoxPost from "./TextBoxPost";
import '../styles/Post.css';


const Post = () => {
  const [url, setUrl] = useState(null);
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));

  //  const [showComponent, setShowComponent] = useState(false);

  //  const handleClick = () => {
  //    setShowComponent(true);
  //  };
  const [file, setFile] = useState({
    owner: userObj._id,
    content: "",
    type: "image",
    text_description: "",
    like_cnt: 0,
  });

  useEffect(() => {
    if (url && file.content !== url) {
      setFile((prevFile) => ({ ...prevFile, content: url }));
    }
  }, [url, file]);

  const handleFileChange = (event) => {
    setFile({ ...file, content: event.target.files[0] });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file.content);
    console.log(`File content before : ${file.content}`);
    axios
      .post("http://localhost:8000/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setUrl(response.data.imageUrl);
        const postData = {
          ...file,
          content: response.data.imageUrl,
        };
        axios
          .post("http://localhost:8000/post", postData)
          .then((response) => {
            console.log(response.data);
            alert('Post uploaded successfully');
            setUrl(null);
            setFile({
              owner: userObj._id,
              content: "",
              type: "image",
              text_description: "",
              like_cnt: "",
            });
            document.getElementById("fileInputButton").value = '';
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const Image = ({ url }) => {
  //   return (
  //     <div style={{ width: "100vw", height: "100vh" }}>
  //       <img
  //         src={url}
  //         alt="Img"
  //         style={{ width: "100%", height: "100%", objectFit: "contain" }}
  //       />
  //     </div>
  //   );
  // };

  return (
    <div style={{border:"1px solid black", backgroundColor:"white", width:"75%", margin:"20px auto"}}>
      {/* <h1>File Upload Example</h1> */}
      <input id="fileInputButton" type="file" onChange={handleFileChange} />
      <label>
        Description:
        <input
          type="text"
          value={file.text_description}
          onChange={(e) =>
            setFile({ ...file, text_description: e.target.value })
          }
        />
      </label>

      {/* <button onClick={handleSubmit}>Upload Image</button> */}
      <button type="button" class="btn btn-light" style={{border:"1px solid black"}} onClick={handleSubmit}>
        Upload Image
      </button>
      {/* <Image url="http://localhost:8000/file/1680858799615-blog-lotus-gfa2ffdb38_1920.jpg" /> */}
    </div>
  );
};

export default Post;
