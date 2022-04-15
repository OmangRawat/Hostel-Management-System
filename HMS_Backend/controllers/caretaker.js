const Guard=require('../models/guard')
const User=require('../models/user');
const Caretaker=require('../models/caretaker')
const Employee=require('../models/employee')
const bcrypt=require('bcrypt');


module.exports.showGuard = async (req,res)=>{
    try{
        
        const stu=await Guard.find();
        res.status(200).json(stu);
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}


module.exports.addGuard=async (req,res)=>{
    
    try{
        console.log('hello');
       
        // const guardSchema= new Schema({
        //     name : String,
        //     phNo : Number,
        //     jobId : Number,
        //     address: String,
        //     password: String,
        //     onDuty: Boolean,
        //     email:String
        // });
        

        const { name,phNo,jobId,address,password,onDuty,email} = req.body;
        let salt_round=1;
        let hashed_password= bcrypt.hashSync(password,salt_round);
        const newGuard = new Guard({name: name,phNo: phNo,jobId: jobId,address:address,password:hashed_password,onDuty:onDuty,email:email });
        await newGuard.save();
        console.log(newGuard);

        const newUser = new User({phNo: phNo,email:email,password:hashed_password,role: 2 });
        await newUser.save();
        console.log(newUser);


        res.status(200).json(newGuard); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.deleteGuard = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await Guard.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.editGuard = async (req,res)=>{
    try{
        console.log('hit');
        const { id,name,phNo,jobId,address,password,onDuty,email} = req.body;
        console.log(req.body)

        if(password == ''){
            console.log('a')
            await Guard.findByIdAndUpdate(id,{name: name,phNo: phNo,jobId: jobId,address:address, onDuty:onDuty,email:email });
            await User.findOneAndUpdate({email: email},{phNo: phNo}); 
        }
        else{
            console.log('b')

            let salt_round=1;
            let hashed_password= bcrypt.hashSync(password,salt_round);
            await Guard.findByIdAndUpdate(id,{name: name,phNo: phNo,jobId: jobId,address:address,password:hashed_password,onDuty:onDuty,email:email });
            await User.findOneAndUpdate({email: email},{phNo: phNo, password:hashed_password});    
        }
        res.status(200).json("edited");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.showEmployee = async (req,res)=>{
    try{
        
        const stu=await Employee.find();
        res.status(200).json(stu);
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}


module.exports.addEmployee=async (req,res)=>{
    
    try{
        console.log('hello');
       
    // name : String,
    // phNo : Number,
    // jobId : Number,
    // address: String,
    // password: String,
    // onDuty: Boolean,
    // email:String

        const { name,phNo,jobId,address,password,onDuty,email} = req.body;

        let salt_round=1;
        let hashed_password= bcrypt.hashSync(password,salt_round);

        const newEmp = new Employee({name: name,phNo: phNo,jobId: jobId,address:address,password:hashed_password,onDuty:onDuty,email:email });
        await newEmp.save();
        console.log(newEmp);

        const newUser = new User({phNo: phNo,email:email,password:hashed_password,role: 3 });
        await newUser.save();
        console.log(newUser);

        res.status(200).json(newEmp); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.deleteEmployee = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await Employee.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.editEmployee = async (req,res)=>{
    try{
        console.log('hit');
        const { id,name,phNo,jobId,address,password,onDuty,email} = req.body;

        if(password == ''){
            console.log('a')
            await Employee.findByIdAndUpdate(id,{name: name,phNo: phNo,jobId: jobId,address:address, onDuty:onDuty,email:email });
            await User.findOneAndUpdate({email: email},{phNo: phNo}); 
        }
        else{
            console.log('b')

            let salt_round=1;
            let hashed_password= bcrypt.hashSync(password,salt_round);
            await Employee.findByIdAndUpdate(id,{name: name,phNo: phNo,jobId: jobId,address:address,password:hashed_password,onDuty:onDuty,email:email });
            await User.findOneAndUpdate({email: email},{phNo: phNo, password:hashed_password});    
        }

        res.status(200).json('edited');
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.changePass = async(req,res)=>{
    try{    
        console.log("caretaker password")
        const {id,old, newpass} = req.body;
        console.log(req.body)
        const st = await Caretaker.findById(id);
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
                    await Caretaker.findByIdAndUpdate(id,{password:hashed_password});
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