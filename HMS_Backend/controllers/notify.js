const Notify=require('../models/notification')

module.exports.showNotification=async (req,res)=>{
    
    try{
        const user= await Notify.find();
        res.status(200).json(user);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}


module.exports.addNotification=async (req,res)=>{
    
    try{
        console.log('hello');
        // sentBy: String,
        // message: String,
        // date: Date

        const { sentBy,message } = req.body;
        const newStu = new Notify({ sentBy:sentBy,message:message});
        await newStu.save();
        console.log(newStu);
        res.status(200).json(newStu); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.deleteNotification = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await Notify.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}
