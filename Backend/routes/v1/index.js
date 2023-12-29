const express = require('express');


const { Addurl} = require('../../controllers/url-controller')


const router = express.Router();

router.post('/url',Addurl);

module.exports = router; 