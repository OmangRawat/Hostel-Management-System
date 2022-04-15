import React from 'react'
import '../../css/Student/S_H_Pass_Popup.css'
import { c_change_Pass } from '../../endpoints/endpoint';

export const C_Pass_Popup = ({childToParent_3}) => {
    const [old, setOld ] = React.useState("");
    const [newpass, setNewPass ] = React.useState("");
    const [newpass2, setNewPass2 ] = React.useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (newpass !== newpass2){
            alert("Enter same password in new password input.......")
        }
        else{
            cchangePass()
        }
    }

    const cchangePass = async() =>{
        let response = {};
        let message = { 
            'id': localStorage.getItem('id'),
            'old': old,
            'newpass': newpass,
        }
        
        response = await c_change_Pass(message)
        console.log(response);
        if(response.message === '500'){
            childToParent_3('close st popup');
        }
        else if(response.message === '404'){
            alert("Old password is wrong....Enter correct one....")
        }
    }

  return (
      
    <div id="myModal" className="modal_password">
        <form className="registerform" onSubmit={handleSubmit}>
            <div className="modal-content-password">
                <p className="text">ENTER NEW PASSWORD</p>
                <span className="input1">
                    <label className="labels">Enter Old Password</label>
                    <input type="text" className="input_pass" placeholder='oldpassword' value={old} onChange={(e) => setOld(e.target.value)} required/>  
                </span>  
                <span className="input1">
                    <label className="labels">Enter New Password</label>    
                    <input type="text" className="input_pass" placeholder='newpassword' value={newpass} onChange={(e) => setNewPass(e.target.value)} required/>  
                </span>
                <span className="input1">
                    <label className="labels">Enter New Password Again</label>    
                    <input type="text" className="input_pass" placeholder='newpassword' value={newpass2} onChange={(e) => setNewPass2(e.target.value)} required/>  
                </span>  
                <input id="submit" className='submit' type="submit" value="Submit" /> 
            </div>
        </form>
    </div>   
        
    )

}
