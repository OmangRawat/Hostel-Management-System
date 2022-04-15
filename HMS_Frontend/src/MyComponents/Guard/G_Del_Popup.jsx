import React from 'react'
import "../../css/Warden/W_Add_St_Popup.css"
import { G_Add_Del } from '../../endpoints/endpoint';

export const G_Del_Popup = ({childToParent}) => {
    const [deliveryId, setDeliveryId ] = React.useState("");
    const [name, setName ] = React.useState("");
    const [deliveryStatus, setDeliveryStatus ] = React.useState(false);
    // const [date, setDate ] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${username}`)
        // alert(`The password you entered was: ${password}`)
        GAddDel()
    }

    const GAddDel = async() =>{
        let response = {};
        
        let message = { 
            'deliveryId': deliveryId,
            'name': name,
        }
        
        response = await G_Add_Del(message)
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
                        <label className="labels" for="">delivery Id</label>
                        <input type="number" name="" id="in_deliveryid" value={deliveryId} onChange={(e) => setDeliveryId(e.target.value)}/>
                    </span>
                    {/* <span className="input2">
                        <label className="labels" for="">Date</label>
                        <input type="password" name="" id="in_date"  value={date} onChange={(e) => setDate(e.target.value)}/>
                    </span> */}
                    <span className="input3">
                        <label className="labels" for="">Name</label>
                        <input type="text" name="" id="in_name"  value={name} onChange={(e) => setName(e.target.value)}/>
                    </span>
                </div>
            </div>
            <div className="errormsg"></div>
            <input id="register" type="submit" value="Register" />
        </form>
    </div>
  )
}
