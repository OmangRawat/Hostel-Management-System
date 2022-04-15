const mongoose =require('mongoose');
const {Schema} =mongoose;


  //await mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority');
  const notifySchema= new Schema({
    sentBy: String,
    message: String,
    date:  { "type": Date, "default": Date.now }
})

const Notify= mongoose.model('Notify',notifySchema);


module.exports=Notify;

