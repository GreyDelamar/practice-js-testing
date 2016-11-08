const express = require('express');

const router = express();


router.get('/', (req, res, next) => {
  res.sendFile('index.html', {root: __dirname + '/../public'}, (err) => {
    if(err) return next(err);
  });
});

module.exports = router;
