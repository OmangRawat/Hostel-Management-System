 const mongoose = require('mongoose');
const passportLocalMongoose= require('passport-local-mongoose');
 const Schema =mongoose.Schema;
//main().catch(err => console.log(err));



//  await mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority');
  const userSchema= new Schema({
   phNo : Number,
   email: {
     type: String,
      required: true,
     unique:true
   },
   password: String,
   role: Number,
});

userSchema.plugin(passportLocalMongoose);
const User= mongoose.model('User',userSchema);

module.exports= User;