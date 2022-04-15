import mongoose from 'mongoose';
const {Schema} =mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority');
  const dashboardSchema= new Schema({
    senderId : String,
    updatedOn : Date,
    update:String,
    subject: String
});

const Dashboard= mongoose.model('Dashboard',dashboardSchema);


module.exports=Dashboard;
}

