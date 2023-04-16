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
    <div>
      {/* <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <br></br>
      <button onClick={handleViewPostsClick}>View My Posts</button>
      {showPosts && <MyPosts />} */}
      <a href="/myposts"><button>My Posts</button></a>
      <Post />
      <TextBoxPost />
    </div>
  );
}

export default Home;
