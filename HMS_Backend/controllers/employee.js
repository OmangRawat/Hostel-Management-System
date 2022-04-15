const Employee=require('../models/employee')
const Requests=require('../models/requests')
const User=require('../models/user');
const bcrypt=require('bcrypt');

module.exports.showAccTask=async (req,res)=>{
    
    try{
        
        console.log('inside')
        emp_id = req.body.id;
        const em= await Employee.findById(emp_id);
        const mail= em.email;
        var arr=[]
        const user= await Requests.find({email: mail});
        console.log(user)
        
        for (let i of user){            
                arr.push({
                    i
                });
        }
        res.status(200).json(arr);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.showTask=async (req,res)=>{
    
    try{
        
        var arr=[]
        const user= await Requests.find();
        for (let i of user){
            // console.log(i)
            const reqs = i.roomCleaning;
            const email = i.email;
            if (reqs == true && email == ''){
                arr.push({
                    i
                });
            }
        }
        res.status(200).json(arr);
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}


module.exports.doneTask=async (req,res)=>{
    
    try{
   
        const { reqId, emp_id } = req.body;
        console.log(reqId)
        const em= await Employee.findById(emp_id);
        const mail= em.email;
        console.log(mail)
        
        const newStu =await Requests.findByIdAndUpdate(reqId,{email:mail, staffphNo:em.phNo, staffname: em.name});
            
        //console.log(newStu);
        res.status(200).json(newStu); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.doneAccTask=async (req,res)=>{
    
    try{
   
        const { reqId } = req.body;
        console.log(reqId)
        
        const newStu = await Requests.findByIdAndDelete(reqId);
            
        //console.log(newStu);
        res.status(200).json(newStu); 
    }
    catch(e){
       // req.flash('error',e.message);
        //res.redirect('register')
        console.log(e);
    }
}

module.exports.changePass = async(req,res)=>{
    try{    
        console.log("e password")
        const {id,old, newpass} = req.body;
        console.log(req.body)
        const st = await Employee.findById(id);
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
                    await Employee.findByIdAndUpdate(id,{password:hashed_password});
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