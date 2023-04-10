import React, { useState, useEffect } from "react";
import axios from "axios";

function PostFrame({ post }) {
  return (
    <div className="post-frame">
      <h3>
        {post.owner.first_name} {post.owner.last_name}
      </h3>
      <p>
        {post.owner.current_year} {post.owner.branch}
      </p>
      <img src={post.content} alt={post.text_description} />
      <h2>{post.text_description}</h2>
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
      {posts.map((post) => (
        <PostFrame key={post._id} post={post} />
      ))}
    </div>
  );
}

export default TextBoxPost;
