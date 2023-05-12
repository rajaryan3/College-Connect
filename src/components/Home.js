import React from 'react';
import Post from './Post';
import TextBoxPost from './TextBoxPost';

const Home = () => {

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, hsla(348, 88%, 66%, 1) 0%, hsla(36, 89%, 68%, 1) 100%)",
      }}
    >
      ;
      <a href="/myposts">
        <button
          type="button"
          class="btn btn-light"
          style={{ marginLeft: "20px", marginTop:"20px" }}
        >
          My Posts
        </button>
      </a>
      <Post />
      <TextBoxPost />
    </div>
  );
}

export default Home;
