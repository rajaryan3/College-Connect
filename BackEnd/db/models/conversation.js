const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  receiverID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  content: {
    type: String,
    required: true
  },
  type : {
    type: String
  },
  seenBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }]
},{
    timestamps:  { 
      createdAt: true, 
      updatedAt: false ,
    }
  }
);

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  messages: [messageSchema] 
} ,{
    timestamps :{ 
      createdAt: true, 
      updatedAt: true ,
    }
});

const conversation = mongoose.model('conversation', conversationSchema);

module.exports = conversation;