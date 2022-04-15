
const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const catchAsync=require('../utils/catchAsync');
const {dets} = require('../controllers/users');

router.route('/')
        .post(dets)


module.exports=router;