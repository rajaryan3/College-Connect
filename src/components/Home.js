import React from 'react';
// import MyPosts from './MyPosts'; 
import Post from './Post';
import TextBoxPost from './TextBoxPost';

const Home = () => {

  // const [showPosts, setShowPosts] = useState(false);

  // const handleViewPostsClick = () => {
  //   setShowPosts(true);
  //   // <MyPosts/>
  // };
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, hsla(348, 88%, 66%, 1) 0%, hsla(36, 89%, 68%, 1) 100%)",
      }}
    >
      ;
      {/* <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <br></br>
      <button onClick={handleViewPostsClick}>View My Posts</button>
      {showPosts && <MyPosts />} */}
      <a href="/myposts">
        {/* <button style={{ marginTop: "20px" }}>My Posts</button> */}
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
