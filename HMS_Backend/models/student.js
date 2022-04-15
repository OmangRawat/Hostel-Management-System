// const mongoose = require('mongoose');
// const {Schema} =mongoose;


//   const studentSchema= new Schema({
//     name : String,
//     phNo : Number,
//     rollNo : Number,
//     roomNo : Number,
//     address: String,
//     password: String,
//     branch: String,
//     passingYear: Number,
// });

// const Student= mongoose.model('Student',studentSchema);


// module.exports=Student;


const mongoose = require('mongoose');
const {Schema} =mongoose;


  const studentSchema= new Schema({
    name : String,
    phNo : Number,
    rollNo : Number,
    address: String,
    password: String,
    branch: String,
    passingYear: Number,
    email: {
      type: String,
       required: true,
      unique:true
    },
    roomNo:Number
});

const Student= mongoose.model('Student',studentSchema);


module.exports=Student;

