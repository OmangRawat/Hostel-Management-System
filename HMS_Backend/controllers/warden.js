const Student=require('../models/student')
const User=require('../models/user');
const Warden=require('../models/warden')

const bcrypt= require('bcrypt');
module.exports.addStudent=async (req,res)=>{
    
    try{
        console.log('hello');
        // const studentSchema= new Schema({
        //     name : String,
        //     phNo : Number,
        //     rollNo : Number,
        //     address: String,
        //     password: String,
        //     branch: String,
        //     passingYear: Number,
        //     email:String,
        //     roomNo:Number
        // });

        const { name,phNo,rollNo,address,password,branch,passingYear,email,roomNo } = req.body;
        // const newStu = new Student({name: name,phNo: phNo,rollNo: rollNo,address:address,password:password,branch:branch,passingYear:passingYear,email:email,roomNo:roomNo });
        let salt_round=1;
        let hashed_password= bcrypt.hashSync(password,salt_round);
        const newStu = new Student({name: name,phNo: phNo,rollNo: rollNo,address:address,password:hashed_password,branch:branch,passingYear:passingYear,email:email,roomNo:roomNo });
        await newStu.save();
        console.log(newStu);

        const newUser = new User({phNo: phNo,email:email,password:hashed_password,role: 1 });
        await newUser.save();
        
        console.log(newUser);
        res.status(200).json(newStu); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.deleteStudent = async (req,res)=>{
    try{
        console.log('hit');
        const {queryId} = req.body;
        // const newReq = new Request({ senderId: id, otherRequest: query });
        // await newReq.save();
        // console.log(newReq);
        await Student.findByIdAndDelete(queryId);
        res.status(200).json("deleted");
       // res.status(200).json(newReq);
    }   
    catch(e){
        console.log(e);
    }
}

module.exports.editStudent = async (req,res)=>{
    try{
        console.log('hit edit');
        console.log(req.body)
        const {id,name,phNo,rollNo,address,password,branch,passingYear,email,roomNo} = req.body;
        if (password == ''){
            await Student.findByIdAndUpdate(id,{name: name,phNo: phNo,rollNo: rollNo,address:address, branch:branch,passingYear:passingYear,email:email,roomNo:roomNo });
            await User.findOneAndUpdate({email: email},{phNo: phNo});   
        }
        else{
            console.log('inside else')
            let salt_round=1;
            let hashed_password= bcrypt.hashSync(password,salt_round);
            await Student.findByIdAndUpdate(id,{name: name,phNo: phNo,rollNo: rollNo,address:address,password:hashed_password,branch:branch,passingYear:passingYear,email:email,roomNo:roomNo });
            await User.findOneAndUpdate({email: email},{phNo: phNo, password:hashed_password});    
        }
        res.status(200).json("updated");
       // res.status(200).json(newReq);
    }
    catch(e){
        console.log(e);
    }
}

module.exports.showStudent = async (req,res)=>{
    try{
        const stu = await Student.find();
        res.status(200).json(stu);
        // res.status(200).json(stu);
    }
    catch(e){
        console.log(e);
    }
}


module.exports.changePass = async(req,res)=>{
    try{    
        console.log("warden password")
        const {id,old, newpass} = req.body;
        console.log(req.body)
        const st = await Warden.findById(id);
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
                    await Warden.findByIdAndUpdate(id,{password:hashed_password});
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