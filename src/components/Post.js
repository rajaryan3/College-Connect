import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [url, setUrl] = useState(null);
  const [file, setFile] = useState({
    owner: "642db39cabeea06e8802f65f",
    content: "",
    type: "image",
    text_description: "FirstPic",
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
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Image = ({ url }) => {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <img
          src={url}
          alt="Img"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>File Upload Example</h1>
      <input type="file" onChange={handleFileChange} />

      <button onClick={handleSubmit}>Upload Image</button>
      <Image url="http://localhost:8000/file/1680810061199-blog-lotus-gfa2ffdb38_1920.jpg" />
    </div>
  );
};

export default Post;
