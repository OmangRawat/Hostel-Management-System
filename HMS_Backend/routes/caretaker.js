const express= require('express');
const router= express.Router();
//const request= require('./controllers/roomCleaning')
const User=require('../models/user');
const Caretaker=require('../models/caretaker')
const catchAsync=require('../utils/catchAsync');
const bcrypt=require('bcrypt');
const {showGuard, addGuard, deleteGuard, editGuard, showEmployee, addEmployee, deleteEmployee , editEmployee, changePass} = require('../controllers/caretaker');

router.route('/showGuard')
        .post(showGuard)

router.route('/addGuard')
        .post(addGuard)

router.route('/deleteGuard')
        .post(deleteGuard)

router.route('/editGuard')
        .post(editGuard)

router.route('/showEmployee')
        .post(showEmployee)

router.route('/addEmployee')
        .post(addEmployee)

router.route('/deleteEmployee')
        .post(deleteEmployee)

router.route('/editEmployee')
        .post(editEmployee)  

router.route('/changePassword')
        .post(changePass)
        
router.route('/add').post( async(req, res) => {
        console.log('inside')
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
        console.log(newUser)

        const newCaretaker = new Caretaker({name: name, phNo: phNo, jobId: jobId, address:address, password:hashed_password, onDuty: onDuty, email:email});
        await newCaretaker.save();


        console.log(newCaretaker)
        res.json('success')
});  

module.exports=router;