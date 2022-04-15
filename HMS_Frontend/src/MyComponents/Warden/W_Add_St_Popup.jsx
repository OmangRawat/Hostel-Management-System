import React from 'react'
import "../../css/Warden/W_Add_St_Popup.css"
import { add_St } from '../../endpoints/endpoint';

export const W_Add_St_Popup = ({childToParent}) => {
    const [name, setName ] = React.useState("");
    const [phNo, setPhNo ] = React.useState("");
    const [rollNo, setRollNo ] = React.useState("");
    const [address, setAddress ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [branch, setBranch ] = React.useState("");
    const [gyear, setGyear ] = React.useState("");
    const [email, setEmail ] = React.useState("");
    const [roomNo, setRoomNo ] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        registerSt()
    }

    const registerSt = async() =>{
        let response = {};
        
        let message = { 
            'name': name,
            'phNo': phNo,
            'rollNo': rollNo,
            'address': address,
            'password': password,
            'branch': branch,
            'passingYear': gyear,
            'email': email,
            'roomNo': roomNo, 
        }
        
        response = await add_St(message)
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
                        <input type="email" name="" id="in_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </span>
                    <span className="input2">
                        <label className="labels" for="">Password</label>
                        <input type="password" name="" id="in_password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </span>
                    <span className="input3">
                        <label className="labels" for="">Roll No</label>
                        <input type="text" name="" id="in_rollno" minLength={7} maxLength={7} value={rollNo} onChange={(e) => setRollNo(e.target.value)} required/>
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
                        <label className="labels" for="">Graduation Year</label>
                        <input type="number" name="" id="in_year" value={gyear} onChange={(e) => setGyear(e.target.value)} required/>
                    </span>
                    <span className="input7">
                        <label className="labels" for="">Branch</label>
                        <input type="text" name="" id="in_branch" value={branch} onChange={(e) => setBranch(e.target.value)} required/>
                    </span>
                    <span className="input8">
                        <label className="labels" for="">Address</label>
                        <input type="text" name="" id="in_address"  value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    </span>
                    <span className="input9">
                        <label className="labels" for="">Room No</label>
                        <input type="number" name="" id="in_roomno" min={1} value={roomNo} onChange={(e) => setRoomNo(e.target.value)} required/>
                    </span>
                </div>
            </div>
            <div className="errormsg"></div>
            <input id="register" type="submit" value="Register" />
        </form>
    </div>
  )
}
