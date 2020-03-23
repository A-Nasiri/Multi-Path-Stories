const express = require('express');

const { getIndex } = require('../controllers/stories');

const router = express.Router();

router.route('/').get(getIndex);

module.exports = router;
