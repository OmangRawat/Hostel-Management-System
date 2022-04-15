const mongoose =require('mongoose');
const {Schema} =mongoose;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority');
  const deliverySchema= new Schema({
    deliveryId: String,
    name: String,
    // recieverId:String,
    // DateRecieved: Date,
    DateRecieved:  { "type": Date, "default": Date.now },
    deliveryStatus:Boolean,
    
});

const Deliver= mongoose.model('Deliver',deliverySchema);

module.exports=Deliver;

// }