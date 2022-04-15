import React from 'react'
import { add_G_Emp } from '../../endpoints/endpoint';
import "../../css/Warden/W_Add_St_Popup.css"

export const C_Add_G_Emp_Popup = ({childToParent}) => {

    const [name, setName ] = React.useState("");
    const [phNo, setPhNo ] = React.useState("");
    const [jobId, setjobId ] = React.useState("");
    const [address, setAddress ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [onDuty, setOnDuty ] = React.useState(false);
    const [email, setEmail ] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        registerGEmp()
    }

    const registerGEmp = async() =>{
        let response = {};
        
        let message = { 
            'name': name,
            'phNo': phNo,
            'jobId': jobId,
            'address': address,
            'password': password,
            'onDuty': onDuty,
            'email': email,
        }
        
        response = await add_G_Emp(message)
        console.log(response);
        childToParent('close st popup');
    }


  return (
    <div className='w_add_st_popup_container'>
                <form className="registerform" onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <div className="infobox">
                <div className="inputs">
                    <span className="input1">
                        <label className="labels" for="">Email ID</label>
                        <input type="email" name="" id="in_email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </span>
                    <span className="input2">
                        <label className="labels" for="">Password</label>
                        <input type="password" name="" id="in_password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </span>
                    <span className="input3">
                        <label className="labels" for="">Job Id</label>
                        <input type="number" name="" id="in_jobid"  value={jobId} onChange={(e) => setjobId(e.target.value)} required/>
                    </span>
                    <span className="input4">
                        <label className="labels" for="">Name</label>
                        <input type="text" name="" id="in_name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                    </span>
                    <span className="input5">
                        <label className="labels" for="">Phone No</label>
                        <input type="number" name="" id="in_phoneno" minLength={10} maxLength={10} value={phNo} onChange={(e) => setPhNo(e.target.value)} required/>
                    </span>
                    <span className="input6">
                        <label className="labels" for="">On Duty</label>
                        <input type="checkbox" name="" id="in_onduty"  value={onDuty} onChange={(e) => setOnDuty(e.target.value)} required/>
                    </span>
                    <span className="input7">
                        <label className="labels" for="">Address</label>
                        <input type="text" name="" id="in_address"  value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </span>
                   
                </div>
            </div>
            <div className="errormsg"></div>
            <input id="register" type="submit" value="Register" />
        </form>
    </div>
  )
}
