const Story = require('../models/Story');

exports.getIndex = (req, res, next) => {
  res.render('index');
};
