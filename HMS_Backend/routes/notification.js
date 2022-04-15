
const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const catchAsync=require('../utils/catchAsync');
const {addNotification,deleteNotification,showNotification} = require('../controllers/notify');

router.route('/addNotification')
        .post(addNotification)

router.route('/deleteNotification')
        .post(deleteNotification)

router.route('/showNotification')
        .post(showNotification)
module.exports=router;