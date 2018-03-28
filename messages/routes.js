var express = require('express');
var router = express.Router();
const Message = require('./model');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let messges =  await Message.find({}).then(messages => {
      if (!messages) {
        console.log(77777)
        return
      } else {
        console.log(88888)
        req.send(messages)
        return
      }

    })
    .catch(next)
  console.log(787878, messges)
  // res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  console.log(333333, req.body.message)
  new Message(req.body.message)
    .save()
    .then(message => {
      console.log(44444, message)
      res.json({message})
    })
    .catch(next)
})

module.exports = router;
