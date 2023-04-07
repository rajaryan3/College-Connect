const Post = require('../db/models/postSchema.js');
const user = require("../db/models/userSchema.js");
const mongoose = require('mongoose');

const  newPost = async (req, response) => {
    const { owner , content , type , text_description , like_cnt } = req.body;
    console.log(req.body);
    // if(!owner || !content || !type || !text_description || !like_cnt){
    //     response.status(400).json('Fill fields properly!');
    //     return;
    // }
    if(!owner){
      response.status(400).json(`Fill owner properly ${owner}`);
      return;
    }
    else if(!content){
        response.status(400).json("Fill content properly!");
        return;
    }
    else if(!type){
        response.status(400).json("Fill type properly!");
        return;
    }
    else if(!text_description){
        response.status(400).json("Fill text_description properly!");
        return;
    }
    else if(like_cnt < 0){
        response.status(400).json("Fill like_cnt properly!");
        return;
    }
    const newpost = new Post({
        owner : owner,
        content : content,
        type : type ,
        text_description : text_description ,
        like_cnt : like_cnt
    });
    try {
        const savedpost = await newpost.save();
        response.status(200).json({message : 'Post saved successfully.'});
    } catch (error) {
        response.status(500).json(error);
    }
}

const deletePost = async(req ,res)=>{
    try {     
        _id = req.body._id
        answer =  await Post.findOneAndUpdate({_id : _id });
        return res.status(200).json({message : "Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}

const getPosts = async (request, response) => {
    try {
        const result = await Post.find().populate({
            path: 'owner',
            select: 'first_name last_name current_year branch'
        });
        // const result = await Post.find()
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
}

// const getPosts = async (request, response) => {
//   try {
//     const posts = await Post.find();
//     const result = await Promise.all(
//       posts.map(async (post) => {
//         if (post.owner) {
//           const owner = await User.findById(post.owner).select(
//             "first_name last_name"
//           );
//           return {
//             ...post.toObject(),
//             owner: owner.toObject(),
//           };
//         } else {
//           return post.toObject();
//         }
//       })
//     );
//     response.status(200).json(result);
//   } catch (error) {
//     response.status(500).json(error);
//   }
// };



// const getPosts = async (request, response) => {
//   try {
//     const result = await Post.find().populate({
//       path: "owner",
//       select: "first_name last_name",
//     });
//     const posts = result.map((post) => {
//       return {
//         owner_first_name: post.owner.first_name,
//         owner_last_name: post.owner.last_name,
//         text_description: post.text_description,
//         image: post.context,
//       };
//     });
//     response.status(200).json(posts);
//   } catch (error) {
//     response.status(500).json(error);
//   }
// };



module.exports = { newPost , deletePost , getPosts }