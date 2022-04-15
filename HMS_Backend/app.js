var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");
var app = express();
var server=require('./server');
const path=require('path');
const ExpressError=require('./utils/ExpressError')
const methodOverride=require('method-override');
const session=require('express-session')
const flash=require('connect-flash')
const ejsMate=require('ejs-mate');
const Requests=require('./models/requests');
const Employee=require('./models/employee');
const Guard=require('./models/guard');
const cors= require('cors');
app.use(express.json())
const Notify=require('./models/notification')
//const userRoutes=require('./routes/users')
//const guardRoutes=require('./routes/guards');
//const cleaningRoutes=require('./routes/cleaning');

// const userRoutes=require('./routes/users')
// const campgroundRoutes=require('./routes/campgrounds');
// const reviewRoutes=require('./routes/reviews');
//const dbUrl= process.env.DB_URL;

// app.use('/campgrounds',campgroundRoutes);
// app.use('/campgrounds/:id/reviews',reviewRoutes);
// app.use('/',userRoutes);

//a//pp.use('/guard',guardRoutes);
//app.use('/guard/:id/cleaning',reviewRoutes);
//app.use('/',userRoutes);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))



app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())


app.get('/', (req,res)=>{
 res.render('home');
});

const guards=require('./routes/guards');
// //const roomQueries= require('./routes/roomQueries');
// const cleaningService=require('./routes/cleaningService');
// //const deliveryStatus=require('./routes/deliveryStatus');
const login = require('./routes/login');
// const signup= require('./routes/signup');
const student= require('./routes/student');
const warden= require('./routes/warden');
const caretaker= require('./routes/caretaker');
const notify=require('./routes/notification');
const employee=require('./routes/cleaningService')
// app.get('/prod',async (req,res)=>{
//     try{
//         const prod= await Requests.find({});
//         console.log(prod);
        
//     }
//     catch(err){
//         console.log(err);
// }
// });

app.use('/login',login);
// app.use('/signup', signup);
app.use('/student',student);
 app.use('/warden', warden);
app.use('/caretaker', caretaker);
app.use('/cleaningService',employee);
app.use('/guards', guards);
app.use('/warden',warden);
app.use('/notify',notify);

app.all('*',(req,res,next)=>{
    next(new ExpressError('Page not found!',404))
})

app.use((err,req,res,next)=>{
    const { statusCode = 500}=err;
    if(!err.message) err.message = 'Oh no, Something went wrong!'
    //res.status(statusCode).render('error',{err});
})

app.listen(5000 , ()=>{
    console.log("listening on port 5000!!")
})

module.exports = app;