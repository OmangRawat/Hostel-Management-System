const mongoose = require('mongoose');
const {Schema} =mongoose;

  const employeeSchema= new Schema({
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
    },
});

const Employee= mongoose.model('Employee',employeeSchema);
module.exports= Employee;