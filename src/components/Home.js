import React from 'react';
import Post from './Post';
import TextBoxPost from './TextBoxPost';

const Home = () => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>HomePage</h1>
        <br></br>
        <Post/>
        <TextBoxPost/>
    </div>
  );
}

export default Home;
