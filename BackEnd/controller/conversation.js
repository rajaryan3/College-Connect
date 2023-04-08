
// const conversation = require('../db/models/conversation.js');

// //import conversation from "../db/models/conversation"

// const newConversation = async (request, response) => {
//     let senderId = request.body.senderId;
//     let receiverId = request.body.receiverId;

//     const exist = await conversation.findOne({ participants: { $all: [receiverId, senderId]  }})
    
//     if(exist) {
//         response.status(200).json('conversation already exists');
//         return;
//     }
//     const newConversation = new conversation({
//         participants: [senderId, receiverId]
//     });

//     try {
//         const savedConversation = await newConversation.save();
//         response.status(200).json(savedConversation);
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }


// // const getConversation = async (request, response) => {
// //     try {
// //         const result = await conversation.findOne({ participants: { $all: [ request.body.senderId, request.body.receiverId] }});
// //         response.status(200).json(result);
// //     } catch (error) {
// //         response.status(500).json(error);
// //     }
// // }


// // addNewMessage function to add a new message to a conversation
// const newMessage = async function (req, res) {
//     try {
//       // get the conversation ID, sender ID, receiver ID, and message content from the request body
//       const { conversationId, senderId, receiverId, content } = req.body;
  
//       // create a new message object with the given parameters
//       const newMessage = {
//         senderID: senderId,
//         receiverID: receiverId,
//         content: content
//       };
      
//       // find the conversation by ID and push the new message to the messages array
//       const updatedConversation = await conversation.findByIdAndUpdate(
//         conversationId,
//         { $push: { messages: newMessage } },
//         { new: true }
//       );
  
//       res.json(updatedConversation);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json(error);
//     }
//   }

// const updateSeenBy = async (req, res) => {
//     try {
//         const conversationId = req.body.conversationId;
//         const messageId = req.body.messageId;
//         const userId = req.body.userId; // the user who has seen the message
    
//         const conversationDoc = await conversation.findById(conversationId);
    
//         if (!conversationDoc) {
//           return res.status(404).json({ message: 'Conversation not found' });
//         }
    
//         const message = conversationDoc.messages.id(messageId);
    
//         if (!message) {
//           return res.status(404).json({ message: 'Message not found' });
//         }
//         // Add the user ID to the "seenBy" array of the message
//         message.seenBy.push(userId);
    
//         // Save the conversation object with the updated "seenBy" property
//         await conversationDoc.save();
    
//         res.status(200).json({ message: 'Message seen by user' });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//       }
//     };

// // GET /conversation route to retrieve conversations for a particular user
// const getConversation = async (req, res) => {
//   const userId = req.query.id; // Get user id from req.body
//   console.log( 'id is :'+ userId)
//   if (!userId) {
//     return res.status(400).json({ error: 'User id is required' });
//   }

//   try {
//     // Find all conversations where the given userId is involved
//     const conversations = await conversation.find({ participants: userId })
//       .sort({ updatedAt: -1 }) // Sort by updatedAt field in descending order (recent conversations first)
//       .populate('participants', 'first_name last_name photo') // Populate participants field with first_name, last_name, and photo fields
//       .exec();

//     // Extract user details from conversations
//     const userConversations = conversations.map(conversation => {
//       // Extract relevant details from conversation object
//       const participants = conversation.participants.filter(participant => participant._id.toString() !== userId); // Exclude the logged-in user from participants
//       const lastMessage = conversation.messages[conversation.messages.length - 1]; // Extract last message from messages array
//       const messages = conversation.messages;
//       // Extract first name, last name, and photo from participants
//       const userData = participants.map(participant => ({
//         first_name: participant.first_name,
//         last_name: participant.last_name,
//         photo: participant.photo
//       }));

//       // Return conversation details with user details and last message
//       return {
//         userData,
//         messages,
//         last_message: lastMessage ? lastMessage.content : null, // Extract content from last message
//         updated_at: conversation.updatedAt
//       };
//     });

//     res.json(userConversations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to get user conversations' });
//   }
// }

// module.exports = { newConversation, getConversation , newMessage , updateSeenBy   }



const conversation = require("../db/models/conversation.js");

//import conversation from "../db/models/conversation"

const newConversation = async (request, response) => {
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;

  const exist = await conversation.findOne({
    participants: { $all: [receiverId, senderId] },
  });

  if (exist) {
    response.status(200).json("conversation already exists");
    return;
  }
  const newConversation = new conversation({
    participants: [senderId, receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    response.status(200).json(savedConversation);
  } catch (error) {
    response.status(500).json(error);
  }
};

// const getConversation = async (request, response) => {
//     try {
//         const result = await conversation.findOne({ participants: { $all: [ request.body.senderId, request.body.receiverId] }});
//         response.status(200).json(result);
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }

// addNewMessage function to add a new message to a conversation
const newMessage = async function (req, res) {
  try {
    // get the conversation ID, sender ID, receiver ID, and message content from the request body
    const { conversationId, senderId, receiverId, content, type } = req.body;

    console.log(
      "hiiiiiiiiiiiiiiiiii" + conversationId + senderId + type + content
    );
    // create a new message object with the given parameters
    const newMessage = {
      senderID: senderId,
      receiverID: receiverId,
      content: content,
      type: type,
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
};

const updateSeenBy = async (req, res) => {
  try {
    const conversationId = req.body.conversationId;
    const messageId = req.body.messageId;
    const userId = req.body.userId; // the user who has seen the message

    const conversationDoc = await conversation.findById(conversationId);

    if (!conversationDoc) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const message = conversationDoc.messages.id(messageId);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    // Add the user ID to the "seenBy" array of the message
    message.seenBy.push(userId);

    // Save the conversation object with the updated "seenBy" property
    await conversationDoc.save();

    res.status(200).json({ message: "Message seen by user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /conversation route to retrieve conversations for a particular user
const getConversation = async (req, res) => {
  const userId = req.query.id; // Get user id from req.body
  console.log("id is :" + userId);
  if (!userId) {
    return res.status(400).json({ error: "User id is required" });
  }

  try {
    // Find all conversations where the given userId is involved
    const conversations = await conversation
      .find({ participants: userId })
      .sort({ updatedAt: -1 }) // Sort by updatedAt field in descending order (recent conversations first)
      .populate("participants", "first_name last_name photo _id") // Populate participants field with first_name, last_name, and photo fields
      .exec();

    // Extract user details from conversations
    const userConversations = conversations.map((conversation) => {
      // Extract relevant details from conversation object
      const participants = conversation.participants.filter(
        (participant) => participant._id.toString() !== userId
      ); // Exclude the logged-in user from participants
      const lastMessage =
        conversation.messages[conversation.messages.length - 1]; // Extract last message from messages array
      const messages = conversation.messages;
      // Extract first name, last name, and photo from participants
      const userData = participants.map((participant) => ({
        first_name: participant.first_name,
        last_name: participant.last_name,
        photo: participant.photo,
        _id: participant._id
      }));

      // Return conversation details with user details and last message
      return {
        conversationId: conversation._id,
        userData,
        messages,
        last_message: lastMessage ? lastMessage.content : null, // Extract content from last message
        updated_at: conversation.updatedAt,
      };
    });

    res.json(userConversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get user conversations" });
  }
};


const getCurrentConversation = async (req, res) => {
  const { user_id, conversation_id } = req.query;
  console.log(req.query);
  console.log("user_id is:", user_id);
  console.log("conversation_id is:", conversation_id);
  if (!user_id || !conversation_id) {
    return res
      .status(400)
      .json({ error: "User id and conversation id are required" });
  }

  try {
    // Find the conversation with the given conversation_id where the given user_id is involved
    const cnv = await conversation
      .findOne({ _id: conversation_id, participants: user_id })
      .populate("participants", "first_name last_name photo _id") // Populate participants field with first_name, last_name, and photo fields
      .exec();

    if (!cnv) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    // Extract user details from conversation
    const participants = cnv.participants.filter(
      (participant) => participant._id.toString() !== user_id
    ); // Exclude the logged-in user from participants
    const lastMessage = cnv.messages[cnv.messages.length - 1]; // Extract last message from messages array
    const messages = cnv.messages;
    // Extract first name, last name, and photo from participants
    const userData = participants.map((participant) => ({
      first_name: participant.first_name,
      last_name: participant.last_name,
      photo: participant.photo,
      _id: participant._id,
    }));

    // Return conversation details with user details and last message
    const currentConversation = {
      conversationId: cnv._id,
      userData,
      messages,
      last_message: lastMessage ? lastMessage.content : null, // Extract content from last message
      updated_at: cnv.updatedAt,
    };

    res.json(currentConversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get current conversation" });
  }
};


module.exports = { newConversation, getConversation, newMessage, updateSeenBy, getCurrentConversation };