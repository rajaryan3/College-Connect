
const conversation = require('../db/models/conversation.js');

//import conversation from "../db/models/conversation"

const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await conversation.findOne({ participants: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new conversation({
        participants: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }
}


const getConversation = async (request, response) => {
    try {
        const result = await conversation.findOne({ participants: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
}


// addNewMessage function to add a new message to a conversation
const newMessage = async function (req, res) {
    try {
      // get the conversation ID, sender ID, receiver ID, and message content from the request body
      const { conversationId, senderId, receiverId, content } = req.body;
  
      // create a new message object with the given parameters
      const newMessage = {
        senderID: senderId,
        receiverID: receiverId,
        content: content
      };
      
      // find the conversation by ID and push the new message to the messages array
      const updatedConversation = await conversation.findByIdAndUpdate(
        conversationId,
        { $push: { messages: newMessage } },
        { new: true }
      );
  
      res.json(updatedConversation);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

const updateSeenBy = async (req, res) => {
    try {
        const conversationId = req.body.conversationId;
        const messageId = req.body.messageId;
        const userId = req.body.userId; // the user who has seen the message
    
        const conversationDoc = await conversation.findById(conversationId);
    
        if (!conversationDoc) {
          return res.status(404).json({ message: 'Conversation not found' });
        }
    
        const message = conversationDoc.messages.id(messageId);
    
        if (!message) {
          return res.status(404).json({ message: 'Message not found' });
        }
        // Add the user ID to the "seenBy" array of the message
        message.seenBy.push(userId);
    
        // Save the conversation object with the updated "seenBy" property
        await conversationDoc.save();
    
        res.status(200).json({ message: 'Message seen by user' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    };

module.exports = { newConversation, getConversation , newMessage , updateSeenBy }
