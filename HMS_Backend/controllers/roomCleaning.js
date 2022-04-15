const requests= require('../models/requests');
const student=require('../models/student');
const employee=require('../models/employee');
const deliver=require('../models/delivery')
const sports=require('../models/sports')
const Guard=require('../models/guard')
const User=require('../models/user');
const bcrypt=require('bcrypt');

module.exports.senderId=async (res,req)=>{
    
    try{
        const number= await requests.find({});
        res.status(200).json(number.senderId);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.recieverId=async (res,req)=>{
    
    try{
        const number= await requests.find({});
        res.status(200).json(number.recieverId);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.roomCleaning=async (res,req)=>{
    
    try{
        const number= await requests.find({});
        for(let i of number){
            const stu= student.findById()
        }
        res.status(200).json(number.roomCleaning);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.otherRequest=async (req,res)=>{
    
    try{
        console.log('working')
        var arr=[]
        const number= await requests.find({});
        // console.log(number)
        for(let i of number){
            const num= i.senderId;
            const stu= await student.findById(num);
            const reqs= i.otherRequest;
            const query_id = i._id;
            
            console.log(stu)
            console.log(reqs)
            console.log(stu.name)
            var sample = {}
            sample['name'] = stu.name
            sample['phNo'] = stu.phNo
            sample['rollNo'] = stu.rollNo
            sample['roomNo'] = stu.roomNo
            sample['Query'] = reqs
            sample['queryId'] = query_id
            // console.log(sample)

            if(reqs!=null){
                // arr.push({
                //    reqs 
                // });
                // arr.push({
                //     stu
                // });
                arr.push({
                    sample
                });
            }
        }
        // console.log(arr)
        res.status(200).json(arr);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.getRequest= async(req,res)=>{

        
    try{
        const stu= await requests.find();
        // var sent = [];
        // var cln=[];
        // for(let i of stu){
        //     console.log(i.senderId);
        //     const stdnt= await student.findById(i.senderId);
        //     const em= await employee.findById(i.recieverId);
        //     sent.push({
        //     stdnt
        //     });
        //     sent.push({
        //         em
        //     });
            
        // }
        var arr = []
        for (let i of stu){
            console.log(i)
            const reqs = i.roomCleaning;
            if (reqs != null){
                arr.push({
                    i
                });
            }
        }
       
        
        //const recieve=await employee.findById(recieverId);
        res.status(200).json(arr);
    }catch(err){
        console.log(err);
    }
}

module.exports.closeQuery = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await requests.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.deliveryStatus = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await deliver.findByIdAndUpdate(queryId,{deliveryStatus:true});
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}



module.exports.addDeliver=async (req,res)=>{
    
    try{
        console.log('hello');
        // sentBy: String,
        // message: String,
        // date: Date

        // const { deliveryId,recieverId } = req.body;
        // const newStu = new deliver({ deliveryId:deliveryId,recieverId:recieverId, deliveryStatus: false});
        const { deliveryId,name } = req.body;
        const newStu = new deliver({ deliveryId:deliveryId,name:name, deliveryStatus: false});
        await newStu.save();
        console.log(newStu);
        res.status(200).json(newStu); 
    }
    catch(e){
        console.log(e);
    }
}


module.exports.showDeliver = async (req,res)=>{
    try{
        
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        console.log('test');
       const del= await deliver.find();
       console.log(del)
        res.status(200).json(del);
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}


module.exports.showSportEquip = async (req,res)=>{
    try{
        
        console.log('inside')
        let arr = []
        const sp= await sports.find();
        let request = req.body.data;

        for(let i of sp){
            const num= i.student_id;
            const stu= await student.findById(num);
            const reqs= i.equip_name;
            const query_id = i._id;
            
            console.log(stu.name)
            var sample = {}
            sample['name'] = stu.name
            sample['rollNo'] = stu.rollNo
            sample['eqp'] = reqs
            sample['queryId'] = query_id
            console.log(i.accepted)
            console.log(request)
            if(i.accepted == false && request == '0'){
                arr.push({
                    sample
                });
            }
            else if(i.accepted == true && request == '1'){
                arr.push({
                    sample
                });
            }
        }

        res.status(200).json(arr);
       
    }
    catch(e){
        console.log(e);
    }
}


module.exports.acceptSportEquip = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId,guard_id} = req.body;
        await sports.findByIdAndUpdate(queryId,{guard_id:guard_id,accepted:true});
        const s=await sports.findById(queryId);
        console.log(s);
        res.status(200).json(s);
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.returnedSportEquip = async (req,res)=>{
    try{
        console.log('abc');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await sports.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}


module.exports.changePass = async(req,res)=>{
    try{    
        console.log("guard password")
        const {id,old, newpass} = req.body;
        console.log(req.body)
        const st = await Guard.findById(id);
        // await Student.findByIdAndUpdate(id,{password:hashed_password});

        const func = () =>{
            bcrypt.compare(old, st.password, async function(err, isMatch) {
                if (err) {
                    throw err
                } else if (!isMatch) {
                    console.log("Password doesn't match!")
                    sample = {};
                    sample['message'] = '404';
                    res.status(200).json(sample)
                } else {
                    console.log("Password matches!")
                    sample = {};
                    let salt_round=1;
                    let hashed_password= bcrypt.hashSync(newpass,salt_round);
                    await Guard.findByIdAndUpdate(id,{password:hashed_password});
                    await User.findOneAndUpdate({email: st.email},{password:hashed_password});
                    sample['message'] = '500';
                    res.status(200).json(sample); 
                }
            })
        }
        func()
        

    }
    catch(e){
        console.log(e);
    }
}

// module.exports.recieverId=async (res,req)=>{

// }

// module.exports.roomCleaning=async (res,req)=>{

// }

// module.exports.other=async (res,req)=>{

// }