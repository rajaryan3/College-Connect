const mongoose = require('mongoose');
// import user from './userSchema'

const postSchema = new mongoose.Schema({
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  owner: { type: String, ref: 'user', required: true },
  content: { type: String },
  type: { type: String },
  text_description: { type: String, required: true },
  like_cnt: { type: Number, default: 0 },
});

const post = mongoose.model('post', postSchema);

module.exports = post;