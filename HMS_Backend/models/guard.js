// const mongoose =require('mongoose');
// const {Schema} =mongoose;

// // main().catch(err => console.log(err));

// // async function main() {
//   // await mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority');
//   const guardSchema= new Schema({
//     name : String,
//     phNo : Number,
//     jobId : Number,
//     address: String,
//     password: String,
//     onDuty: Boolean,
// });



// var Guard= mongoose.model('Guard',guardSchema);
// module.exports=Guard;
// console.log('hi');
// };

const mongoose =require('mongoose');
const {Schema} =mongoose;


  const guardSchema= new Schema({
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



var Guard= mongoose.model('Guard',guardSchema);


module.exports=Guard;
console.log('hi');