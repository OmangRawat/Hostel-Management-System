const mongoose = require('mongoose');
const {Schema} =mongoose;

  const sportSchema= new Schema({
    equip_name : String,
    requested : Boolean,
    accepted : Boolean,
    student_id : String,
    guard_Id: String
})

const Sport= mongoose.model('Sport',sportSchema);


module.exports=Sport;