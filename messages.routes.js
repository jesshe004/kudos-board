// const express = require('express');
// const db = require('.')

// const {getAllMessages, createMessage} = require('../controllers/messages');
const router = express.Router();

router.route("/").post(createMessage).get(getAllMessages);

module.exports = router;
