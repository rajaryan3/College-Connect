const express = require('express');

const { newMessage , getConversation , newConversation , updateSeenBy } = require('../controller/conversation.js');
const { uploadImage, getImage } = require('../controller/file.js');
const { newPost , deletePost , getPosts } = require('../controller/post');
const { newResource , updateResource , getResource, deleteResource} = require('../controller/resources')

const upload = require('../utils/upload.js');


const route = express.Router();

route.post('/conversation',newConversation);
route.get('/conversation', getConversation);
route.put('/conversation', newMessage);
route.put('/conversation/seenby', updateSeenBy);
route.post('/post', newPost);
route.get('/post' , getPosts);
route.delete('/post' , deletePost);
route.get('/resources', getResource);
route.post('/resources', newResource);
route.put('/resources', updateResource);
route.delete('/resources', deleteResource);


route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);

module.exports = route;