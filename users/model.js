let mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

let usersSchema = new mongoose.Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  facebookId: String
})
usersSchema.plugin(findOrCreate);

module.exports = mongoose.model('Users', usersSchema)