const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', err => {
  if (err) throw err
})
mongoose.set('debug', true);

module.exports = mongoose;