import React from 'react'
import '../../css/Student/S_H.css'
import { S_H_Popup } from './S_H_Popup';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import { get_St_Det, send_Cln_Req, send_Other_Req, send_Sports_Req } from '../../endpoints/endpoint';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { S_H_Sports_Popup } from './S_H_Sports_Popup';
import { S_H_Pass_Popup } from './S_H_Pass_Popup';


export const S_H = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [rollNo, setRollNo] = React.useState('');
    const [roomNo, setRoomNo] = React.useState('');
    const [branch, setBranch] = React.useState('');
    const [phNo, setPhNo] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [year, setYear] = React.useState('');
    const [otherQuery, setOtherQuery] = React.useState('');
    const [modSelect, setModSelect] = React.useState('');

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
    setYear(response.passingYear)
  }

    const printValue = (value) => {
        // do something here
        setModalIsOpen(true)
        setModSelect('0')
        console.log(value)
    }

    const popUpclose = (value) => {
        // do something here
        setModalIsOpen(false)
        setModSelect('')
        console.log(value)
      }

      const customStyles = {
        content : {
          top                   : '51%',
          left                  : '59%',
          right                 : 'auto',
          bottom                : 'auto',
          width                 : '65vw',
          padding               : '0px',
          transform             : 'translate(-63%, -51%)',
          overflow              : 'hidden',
          background            : 'rgba(255, 255, 255, 0.75);',  
          border                : 'none',  
        }
    };
    const customStyles_2 = {
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

    
    const sendSportsReq = async() =>{
      setModalIsOpen(true)
      setModSelect('1')
      console.log('working')
    }

    
    const childToParent_2 = (childdata1, childdata2) => {
      console.log(childdata1)
      console.log(childdata2)
      console.log('1')

      sportsReq(childdata1);

      setModalIsOpen(false)
      setModSelect(''); 
    }

    const sportsReq =async(childdata1) =>{
      let message = {
        "id": localStorage.getItem("id"),
        "equip_name": childdata1,
      }
      let response = {};
      response = await send_Sports_Req(message);
      console.log(response)
      alert("Request for "+ childdata1 + " has been sent");
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

    const changePassword = async() =>{
        setModalIsOpen(true)
        setModSelect('2')
      }

    const childToParent_3 = (childdata) => {
        console.log(childdata)
        setModalIsOpen(false)
        setModSelect(''); 
        alert("Your password is updated successfully")
    }


    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '1'){
        return <Navigate to='/login' />
    }

    return (
    <>
        <Navbar />
        <div className='S_H_container'>
            <div className="upper">
                <div className="content">
                    <div className="textbox">
                        <h2>Hostel life is a great event that teaches about difficulties of life.</h2>
                    </div>
                    <button id="myBtn" className="add" onClick = {() => printValue('test') }> Report Hostel Issue </button>
                    
                    <button id="myBtn" className="add" onClick = {() => sendClnRequest()}> Cleaning Request</button>
                    
                    <button id="myBtn" className="add" onClick = {() => sendSportsReq()}> Sports Equipment Request </button>

                    <button id="myBtn" className="add" onClick = {() => changePassword()}> Change Password </button>
                </div>
                <div className="agentinfocard">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-gkejqmGASWgZIQmq04pjj37OUTMTVR00W8TTPVS1AGglMptC-f1-r0QrPqIfleKDbo&usqp=CAU" alt="profile" />  
                        </div>
                        <div className="desc">
                            <h6 className="primary-text name">{name} </h6>
                            <h6 className="secondary-text">{rollNo} </h6>
                            <h6 className="secondary-text">{email} </h6>
                            <h3 id="cnumber">(+91){phNo}</h3>
                            {/* <h6 className="secondary-text">Room No: {roomNo} </h6> */}

                        </div>
                        <div className="details-1">
                            <div className="rating">
                                <h6 className="primary-text"> {branch} </h6>
                                <h6 className="secondary-text">Major</h6>
                            </div>
                            <div className="activity">
                                <h6 className="primary-text"> {year} </h6>
                                <h6 className="secondary-text">Passing Year</h6>
                            </div>
                            <div className="abc">
                                <h6 className="primary-text"> {roomNo} </h6>
                                <h6 className="secondary-text">Room No</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen && modSelect === '0'}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                <Button onClick={() => popUpclose("close")} sx = {{ border: '1px solid',  borderBottom: 'none'}}>x</Button>
                <S_H_Popup  childToParent={childToParent}/>
            </Modal>
            <Modal isOpen={modalIsOpen && modSelect === '1'}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                <Button onClick={() => popUpclose("close")} sx = {{ border: '1px solid',  borderBottom: 'none'}}>x</Button>
                <S_H_Sports_Popup  childToParent_2={childToParent_2}/>
            </Modal>
            <Modal isOpen={modalIsOpen && modSelect === '2'}  style = {customStyles_2} onRequestClose={()=> setModalIsOpen(false)}>
                <Button onClick={() => popUpclose("close")} sx = {{ border: '1px solid',  borderBottom: 'none'}}>x</Button>
                <S_H_Pass_Popup  childToParent_3={childToParent_3}/>
            </Modal>
        </div>
    </>
  )
}
