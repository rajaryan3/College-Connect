import React, { useState, useEffect } from "react";
import '../styles/Post.css'
import axios from "axios";

function PostFrame({ post }) {
  return (
    <div className="post-frame" style={{color:"white"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <div>
          <img
            src={post.owner.photo}
            style={{
              width: "25px",
              height: "20px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            alt="profile_pic"
          />
          <h5 style={{display:"inline"}}>
            {post.owner.first_name} {post.owner.last_name}
          </h5>
        </div>
        <p>
          {post.owner.current_year} {post.owner.branch}
        </p>
      </div>

      <img src={post.content} alt={post.text_description} />
      <h6>{post.text_description}</h6>
    </div>
  );
}

function TextBoxPost() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/post")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="post-list">
      {posts
        .sort(() => Math.random() - 0.5)
        .map((post) => (
          <PostFrame key={post._id} post={post} />
        ))}
    </div>
  );
}

export default TextBoxPost;
