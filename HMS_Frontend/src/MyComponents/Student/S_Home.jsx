import React from 'react'
import Modal from 'react-modal';
import { Navigate } from "react-router-dom";
import { S_Popup } from './S_Popup';
import Button from '@mui/material/Button';
import '../../css/Student/S_Home.css'
import male_avatar from '../../Images/male_ava.svg'
import { get_St_Det, send_Cln_Req, send_Other_Req } from '../../endpoints/endpoint';
import { Navbar } from '../Navbar';

export const S_Home = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [buttonStatus, setbuttonStatus] = React.useState('Request Cleaning');
  const [otherQuery, setOtherQuery] = React.useState('');
  const [name, setName] = React.useState('');
  const [rollNo, setRollNo] = React.useState('');
  const [roomNo, setRoomNo] = React.useState('');
  const [branch, setBranch] = React.useState('');
  const [phNo, setPhNo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [role, setRole] = React.useState();

  React.useEffect(() => {
         
        // setRole(localStorage.getItem('role'))
        getStDetails();

  }, []);

  const getStDetails = async () =>{
    let response = {};
    let message = { 'id': localStorage.getItem('id') , 'role': localStorage.getItem('role')}
    response = await get_St_Det(message)
    console.log(response)
    setName(response.name)
    setRollNo(response.rollNo)
    setRoomNo(response.roomNo)
    setBranch(response.branch)
    setPhNo(response.phNo)
    setEmail(response.email)
  }

  const childToParent = (childdata) => {
      console.log(childdata)
      setOtherQuery(childdata)

      // if (childdata === 'checked'){
      // console.log('tested');

      sendOtherReq(childdata)

      setModalIsOpen(false)
      // }   
    }

    const sendOtherReq = async(childdata) =>{
      let response = {}
      let message = {
        'id': localStorage.getItem('id'),
        'query': childdata
      }
      response = await send_Other_Req(message)
      console.log(response)
    }

  const printValue = (value) => {
    // do something here
    setModalIsOpen(true)
    console.log(value)
  }
  const popUpclose = (value) => {
    // do something here
    setModalIsOpen(false)
    console.log(value)
  }
  const sendRequest = () => {
    // do something here
    // if (buttonStatus === 'Request Cleaning')
    // { 
    //   console.log('working')
    //   sendClnRequest();
    //   setbuttonStatus('Request Sent');
    // } 
    // else if (buttonStatus === 'Request Sent')
    // {
    //   alert('Request is already sent');
    // }
          sendClnRequest();



  }

  const sendClnRequest = async() =>{
    let response = {}  
    let message = {
      'id': localStorage.getItem('id')
    }
    response = await send_Cln_Req(message)
    console.log(response)
    if (response['message'] === '0'){
      alert('Request already sent....Your room will be cleaned soon....')
    }
    else{
      alert('Request Sent!!!!')
    }
  }


  const customStyles = {
    content : {
      top                   : '51%',
      left                  : '59%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '65vw',
      // marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      overflow              : 'none',
      // backgroundColor       : '#F0AA89',  
      border                : 'none',  
    }
};

if (localStorage.getItem('id') == null) {
    console.log("inside status: go to login")
    alert('login to access your account')
    return <Navigate to='/login' />
}
else if(localStorage.getItem('role') !== '1'){
    return <Navigate to='/login' />
}

else return (
      <>
        <Navbar />
        <div className="containerA">
        <div className="leftcontainerA">
            <div className="imgcontainer">
                <img src={male_avatar} alt="male_avatar" />
            </div>
            <p id="name">
                {name}
            </p>
        </div>
        <div className="rightcontainerA">
            <p className="info_item_left">
                Room No.: <span className="info_item_right"> {roomNo} </span>
            </p>
            <p className="info_item_left">
                Email: <span className="info_item_right"> {email} </span>
            </p>
            <p className="info_item_left">
                Roll No.: <span className="info_item_right"> {rollNo}</span>
            </p>
            <p className="info_item_left">
                Major: <span className="info_item_right"> {branch}</span>
            </p>
            <p className="info_item_left">
                Mobile No.: <span className="info_item_right"> {phNo}</span>
            </p>
        </div>
    </div>
    <div className="request_menu">
        <div className="btn-pluss-wrapper">
            <div href="#" className="btn-pluss">
                <ul>
                    <li><a id="cleaning"  onClick = {() => sendRequest()}>Send Request</a></li>
                    <li><a id="inform" onClick = {() => printValue('test') }>Inform Problem</a></li>
                    <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                        <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
                        <S_Popup childToParent={childToParent}/>
                    </Modal>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
