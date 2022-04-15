
const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const catchAsync=require('../utils/catchAsync');
const {doneTask,showTask, showAccTask, doneAccTask, changePass} = require('../controllers/employee');


router.route('/completed')
        .post(doneTask)

router.route('/showTask')
        .post(showTask)

router.route('/showAccTask')
        .post(showAccTask)      

router.route('/doneAccTask')
        .post(doneAccTask)  


router.route('/changePassword')
        .post(changePass)
        
module.exports=router;