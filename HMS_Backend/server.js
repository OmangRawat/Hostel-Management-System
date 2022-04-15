// const mongoose =require('mongoose');

// const url = `mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })



var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rahul:pro@hosteldata.d751q.mongodb.net/hostel?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;