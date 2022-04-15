
const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const catchAsync=require('../utils/catchAsync');
const {dets,roomClean,otherReq, sportReq, changePass} = require('../controllers/student');

router.route('/cleaningRequests')
        .post(roomClean);

router.route('/otherRequests')
        .post(otherReq)

router.route('/sportRequest')
        .post(sportReq)

router.route('/changePassword')
        .post(changePass)

router.route('/:id')
        .post(dets)
        


// cleaningReq
// otherIasues

module.exports=router;