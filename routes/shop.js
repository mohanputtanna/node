const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('In the default middleware!');
    res.send('<h1>Hello from Express Default Page!</h1>');
})

module.exports = router;