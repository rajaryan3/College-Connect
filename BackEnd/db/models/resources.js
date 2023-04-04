const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  currentYear: { type: String, required: true },
  AY: { type: String, required: true },
  branch: { type: String, required: true },
  degree: { type: String, required: true },
  subjects: [{
    sub_name: { type: String, required: true },
    sources: [{
      title: { type: String, required: true },
      linkOrFileUpload: { type: String, required: true },
      type: { type: String, required: true },
      posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    }]
  }]
});

const resource = mongoose.model('Resource', ResourceSchema);

module.exports = resource;