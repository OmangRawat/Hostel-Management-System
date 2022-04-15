import React from 'react'
import { add_Notifications } from '../endpoints/endpoint';
import "../css/Warden/W_Add_St_Popup.css"

export const D_New_Update = ({childToParent}) => {

    const [sentBy, setSentBy ] = React.useState("");
    const [notice, setNotice ] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addNotification()
    }

    const addNotification = async() =>{
        let response = {};
        
        let message = { 
            'sentBy': sentBy,
            'message': notice,
        }
        
        response = await add_Notifications(message)
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
                        <label className="labels" for="">Sent By</label>
                        <input type="text" name="" id="in_sentby" value={sentBy} onChange={(e) => setSentBy(e.target.value)}/>
                    </span>
                    <span className="input2">
                        <label className="labels" for="">message</label>
                        <input type="text" name="" id="in_message"  value={notice} onChange={(e) => setNotice(e.target.value)}/>
                    </span>
                </div>
            </div>
            <div className="errormsg"></div>
            <input id="register" type="submit" value="Register" />
        </form>
    </div>
  )
}
