
const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const {dets, add} = require('../controllers/users');

router.route('/')
        .post(dets);

router.route('/addUser')
        .post(add)

module.exports = router;