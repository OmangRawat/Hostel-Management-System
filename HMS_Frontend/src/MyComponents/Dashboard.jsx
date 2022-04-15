import * as React from 'react'
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import "../css/Dashboard/Dashboard.css"
import { delete_Notifications, retrive_Notifications } from '../endpoints/endpoint';
import Deleteimg from "../Images/delete.svg"
import { D_New_Update } from '../MyComponents/D_New_Update';
import { Navbar } from './Navbar';

export const Dashboard = () => {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [allNotice, setAllNotice] = React.useState([]);

    React.useEffect(() => {
        retriveNotifications();
    }, []);

    const retriveNotifications = async () =>{
        let response = {};
        response = await retrive_Notifications()
        setAllNotice(response)
        console.log(response)
    }

    const openPopup = (value1) => {
        setModalIsOpen(true)
        console.log(value1)
      }

      const popUpclose = (value) => {
        setModalIsOpen(false)
        console.log(value)
      }
    
    const childToParent = (childdata) => {
        console.log(childdata)
        setModalIsOpen(false)
        // window.location.reload();
        retriveNotifications();
    }

    const deleteReq = async(id) =>{
        console.log(id)
        let response = {}
        let message = {'queryId': id}
        response = await delete_Notifications(message)
        console.log(response)
        retriveNotifications();
    }
      

    // if (localStorage.getItem('role') !== 4) {
    //     const deleteauth = <></>
    // } 
    // else {
    //     const   deleteauth = <button className="deletenotice" onClick={() => deleteReq(notice['_id'])}>
    //                 DELETE <img src={Deleteimg} alt="delete" />
    //             </button>;
    // }

    const delete_auth = (id) =>{
        if(localStorage.getItem('role') === '4' || localStorage.getItem('role') === '5'){
            return(
            <button className="deletenotice" onClick={() => deleteReq(id)}>
                <div>DELETE</div> <img src={Deleteimg} alt="delete" />
            </button>
            )
        }
    }

    const Notice_auth = () =>{
        if(localStorage.getItem('role') === '4' || localStorage.getItem('role') === '5'){
            return(
                <button className="addnotice"  onClick = {() => openPopup('testing') } >New Notice</button>
            )
        }
    }

    const customStyles = {
        content : {
          top                   : '51%',
          left                  : '59%',
          right                 : 'auto',
          bottom                : 'auto',
          width                 : '65vw',
          height                 : '60vh',
          // marginRight           : '-50%',
          transform             : 'translate(-70%, -60%)',
          overflow              : 'none',
          // backgroundColor       : '#F0AA89',  
          border                : 'none',  
        }
    };

  return (
      <>
    <Navbar />
    <div>
        <div className="mainpage">
            <div className="in_mainpage">
                {Notice_auth()}
                {/* <button className="addnotice"  onClick = {() => openPopup('testing') } >New Notice</button> */}

                <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                    <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
                    <D_New_Update childToParent={childToParent}/>
                </Modal>

                <div className="noticeboard">
                    {allNotice
                    .map((notice) => {
                        return (
                            <div className="noticebox">
                                <div className="date">{notice['date']}</div>
                                <div className="notice">
                                    Dear All,<br/>
                                    {notice['message']}
                                </div>
                                <div className="postedby">
                                    Posted By : <span>{notice['sentBy']}</span>
                                </div>
                                { delete_auth(notice['_id']) }
                                {/* {
                                    () =>{
                                        
                                        if(localStorage.getItem('role') === 1){
                                            return(
                                            <button className="deletenotice" onClick={() => deleteReq(notice['_id'])}>
                                                DELETE <img src={Deleteimg} alt="delete" />
                                            </button>
                                            )
                                        }
                                    }        
                                } */}
                                    

                            </div>
                        )
                    })}
                    
                </div>
            </div>
            <div id="addnoticeform" className="addnoticeform">
                <form action="">
                    <h1>-- New Notice --</h1>

                    <div className="addnoticeitem">
                        <label className="noticedate" for="">DATE</label>
                        <input type="text" name=""  placeholder="1st January 2020" />
                    </div>
                    <div className="addnoticeitem">
                        <label className="noticedesc" for="">NOTICE DESCRIPTION</label>
                        <input type="text" name="" className="noticedescinput" placeholder="Write your notice here..." />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
