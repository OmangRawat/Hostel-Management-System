
const express= require('express');
const router= express.Router();
const User=require('../models/user');
//const request= require('./controllers/roomCleaning')
const catchAsync=require('../utils/catchAsync');
const {addStudent,deleteStudent,editStudent, showStudent, changePass} = require('../controllers/warden');
const Warden=require('../models/warden')
const bcrypt=require('bcrypt');


router.route('/addStudent')
        .post(addStudent)

router.route('/deleteStudent')
        .post(deleteStudent)

router.route('/editStudent')
        .post(editStudent)

router.route('/showStudent')
        .post(showStudent)

router.route('/changePassword')
        .post(changePass)

router.route('/add').post( async(req, res) => {
        let salt_round=1;
        const name = req.body.name
        const phNo = req.body.phNo
        const jobId = req.body.jobId
        const address = req.body.address
        const hashed_password = bcrypt.hashSync(req.body.password, salt_round)
        const onDuty = req.body.onDuty
        const email = req.body.email   
        const role = req.body.role 
        
        const newUser = new User({phNo: phNo,email:email,password:hashed_password,role:role });
        await newUser.save();

        const newWarden = new Warden({name: name, phNo: phNo, jobId: jobId, address:address, password:hashed_password, onDuty: onDuty, email:email});
        await newWarden.save();


        console.log(newWarden)
});
             

module.exports=router;