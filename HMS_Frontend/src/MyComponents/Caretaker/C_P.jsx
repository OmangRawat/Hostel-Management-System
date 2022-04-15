import React from 'react'
import '../../css/Warden/W_P.css'
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import { get_St_Det} from '../../endpoints/endpoint';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { C_Pass_Popup } from './C_Pass_Popup';
 

export const C_P = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [phNo, setPhNo] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');

    React.useEffect(() => {
         
        // setRole(localStorage.getItem('role'))
        getStDetails();

  }, []);

  const customStyles = {
    content : {
      top                   : '51%',
      left                  : '59%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '40vw',
      padding               : '0px',
      transform             : 'translate(-63%, -51%)',
      overflow              : 'hidden',
      background            : 'rgba(255, 255, 255, 0.75);',  
      border                : 'none',  
    }
};

  const getStDetails = async () =>{
    let response = {};
    let message = { 'id': localStorage.getItem('id') , 'role': localStorage.getItem('role')}
    response = await get_St_Det(message)
    console.log(response)
    setName(response.name)
    setPhNo(response.phNo)
    setEmail(response.email)
    setAddress(response.address)
  }


  const changePassword = async() =>{
    setModalIsOpen(true)
}

const childToParent_3 = (childdata) => {
    console.log(childdata)
    setModalIsOpen(false)
    alert("Your password is updated successfully")
}
const popUpclose = (value) => {
    // do something here
    setModalIsOpen(false)
    console.log(value)
  }


    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '5'){
        return <Navigate to='/login' />
    }

    return (
    <>
        <Navbar />
        <div className='W_P_container'>
            <div className="upper">
                <div className="agentinfocard">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-gkejqmGASWgZIQmq04pjj37OUTMTVR00W8TTPVS1AGglMptC-f1-r0QrPqIfleKDbo&usqp=CAU" alt="profile" />  
                        </div>
                        <div className="desc">
                            <h6 className="primary-text name">{name} </h6>
                            <h6 className="secondary-text">{email} </h6>
                            <h6 className="secondary-text">{address} </h6>
                            <h3 id="cnumber">(+91){phNo}</h3>
                            <button id="myBtn" className="add" onClick = {() => changePassword()}> Change Password </button>
                            
                            {/* <h6 className="secondary-text">Room No: {roomNo} </h6> */}

                        </div>
                        <div className="details-1">
                            <div className="rating">
                                <h6 className="primary-text"> IIIT GUWAHATI CARETAKER </h6>
                                {/* <h6 className="secondary-text">IIIT GUWAHATI WARDEN</h6> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
            <Button onClick={() => popUpclose("close")} sx = {{ border: '1px solid',  borderBottom: 'none'}}>x</Button>
            <C_Pass_Popup  childToParent_3={childToParent_3}/>
        </Modal>
    </>
  )
}
