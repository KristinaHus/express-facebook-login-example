let mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
  text: String,
  author: String,
  createdAt: String
})

module.exports = mongoose.model('Message', messageSchema)