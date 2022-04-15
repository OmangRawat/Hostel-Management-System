// const mongoose = require('mongoose');
// const {Schema} = mongoose;

// const wardenSchema = new Schema({
//     name: String,
//     phNo: Number, 
//     jobId: Number,
//     address: String,
//     password: String,
//     onDuty: Boolean,
//     email: String

// });

// var Warden= mongoose.model('Warden', wardenSchema);
// module.exports = Warden;

const mongoose =require('mongoose');
const {Schema} =mongoose;


  const wardenSchema= new Schema({
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



var Warden= mongoose.model('Warden',wardenSchema);


module.exports=Warden;
