// const mongoose = require('mongoose');
// const {Schema} = mongoose;
// const careTakerSchema = new Schema({
//     name: String,
//     phNo: Number, 
//     jobId: Number,
//     address: String,
//     password: String,
//     onDuty: Boolean,
//     email: String

// });

// var CareTaker = mongoose.model('CareTaker', careTakerSchema);
// module.exports = CareTaker;

const mongoose =require('mongoose');
const {Schema} =mongoose;


  const careTakerSchema= new Schema({
    name : String,
    phNo : Number,
    jobId : Number,
    address: String,
    password: String,
    onDuty: Boolean,
    email: {
      type: String,
       required: true,
      unique:true
    }
});



var CareTaker= mongoose.model('CareTaker',careTakerSchema);


module.exports=CareTaker;