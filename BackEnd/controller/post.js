const Post = require('../db/models/postSchema.js');

const  newPost = async (req, response) => {
    const { owner , content , type , text_description , like_cnt } = req.body;
    console.log("hiiiii\n");
    if(!owner || !content || !type || !text_description || !like_cnt){
        response.status(400).json('Fill fields properly!');
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
        answer =  await Restaurant.findOneAndUpdate({_id : _id });
        return res.status(200).json({message : "Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}

const getPosts = async (request, response) => {
    try {
        const result = await Post.find();
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
}


module.exports = { newPost , deletePost , getPosts }
