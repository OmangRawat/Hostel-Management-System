const Student=require('../models/student')
const Guard=require('../models/guard')
const Employee=require('../models/employee')
const Request=require('../models/requests')
const Warden=require('../models/warden')
const Caretaker=require('../models/caretaker')
const User=require('../models/user');
const bcrypt=require('bcrypt');
const Sports=require('../models/sports')

module.exports.dets=async (req,res)=>{
    
    try{
        // console.log(req.params);
        // const {id}= req.params;
        const {id, role}= req.body;
        if(role == 1){
            console.log('student')
            const user= await Student.findById(id);
            res.status(200).json(user);

        }
        else if(role == 2){
            console.log('guard')
            const user= await Guard.findById(id);
            res.status(200).json(user);
        }
        if(role == 3){
            console.log('employee')
            const user= await Employee.findById(id);
            res.status(200).json(user);

        }
        if(role == 4){
            console.log('warden')
            const user= await Warden.findById(id);
            res.status(200).json(user);

        }
        if(role == 5){
            console.log('caretaker')
            const user= await Caretaker.findById(id);
            res.status(200).json(user);

        }
        // res.status(200).json(user);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}


module.exports.roomClean = async (req,res)=>{
    try{
        console.log('received')
        const {id} = req.body;
        const st = await Student.findById(id);
        const a = st.roomNo;
        console.log(a)

        const abc = await Request.find({senderId: id, roomCleaning: true})
        console.log(abc)
        if(abc.length == 0){
            console.log('if')
            const newReq = new Request({ senderId: id, roomCleaning: true, roomNo: a});
            await newReq.save();
            console.log(newReq)
            res.status(200).json(newReq);
        }
        else{
            console.log('else')
            res.status(200).json({'message': '0'});       
        }

        // const newReq = new Request({ senderId: id, roomCleaning: true, roomNo: a});
        // await newReq.save();
        // console.log(newReq)
    }
    catch(e){
        console.log(e);
    }
}

module.exports.otherReq = async (req,res)=>{
    try{
        const {id,query} = req.body;
        const st = await Student.findById(id);
        const a = st.roomNo;
        const newReq = new Request({ senderId: id, otherRequest: query, roomNo: a });
        await newReq.save();
        console.log(newReq);
        res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.sportReq = async(req,res)=>{
    try{
            const {id,equip_name} = req.body;
            const equip= new Sports({equip_name:equip_name,student_id:id,requested:true,accepted:false});
            await equip.save();
            console.log(equip);
            res.status(200).json(equip);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.changePass = async(req,res)=>{
    try{    
        
        const {id,old, newpass} = req.body;
        console.log(req.body)
        const st = await Student.findById(id);
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
                    await Student.findByIdAndUpdate(id,{password:hashed_password});
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