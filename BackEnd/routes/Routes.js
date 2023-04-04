const express = require('express');

const { newMessage , getConversation , newConversation , updateSeenBy } = require('../controller/conversation.js');
const { uploadImage, getImage } = require('../controller/file.js');


const upload = require('../utils/upload.js');


const route = express.Router();

route.post('/conversation',newConversation);
route.get('/conversation', getConversation);
route.put('/conversation', newMessage);
route.put('/conversation/seenby', updateSeenBy);
route.post('/post', uploadpost);
route.get('/post' , getposts);


route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);

module.exports = route;