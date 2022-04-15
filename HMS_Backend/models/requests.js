const mongoose=require('mongoose');
const {Schema} =mongoose;

  const requestSchema= new Schema({
    senderId : String,
    email: {"type":String, "default":''},
    roomCleaning : Boolean,
    otherRequest: String,
    roomNo:Number,
    date:  { "type": Date, "default": Date.now },
    staffphNo: {type: Number,"default": null},
    staffname:{type: String,"default":'',}

});

const Request= mongoose.model('Request',requestSchema);


module.exports=Request;