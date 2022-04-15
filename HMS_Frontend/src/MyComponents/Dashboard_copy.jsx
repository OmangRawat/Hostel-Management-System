import * as React from 'react'
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import "../css/Dashboard/Dashboard.css"
import { retrive_Notifications } from '../endpoints/endpoint';
import Deleteimg from "../Images/delete.svg"
import { D_New_Update } from '../MyComponents/D_New_Update';

export const Dashboard = () => {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [allNotice, setAllNotice] = React.useState([]);

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
        window.location.reload();
    }
      

  return (
    <div>
        <div className="mainpage">
            <div className="in_mainpage">
                <button className="addnotice"  onClick = {() => openPopup('testing') } >New Notice</button>

                <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                    <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
                    <D_New_Update childToParent={childToParent}/>
                </Modal>

                <div className="noticeboard">
                    <div className="noticebox">
                        <div className="date">14 March 2022</div>
                        <div className="notice">
                            Dear All,<br/>
                            It is to inform you that due to some maintenance of the water pipeline, the water supply will be temporarily stopped from 9:00 AM - 5:00 PM on 15th-March-2022, especially in Boys Hostel. Therefore everyone is requested to store some water for tomorrow.
                        </div>
                        <div className="postedby">
                            Posted By : <span>Dr. Rakesh Matam</span>
                        </div>
                        <div className="deletenotice">
                            DELETE <img src={Deleteimg} alt="delete" />
                        </div>
                    </div>
                    <div className="noticebox">
                        <div className="date">14 March 2022</div>
                        <div className="notice">
                            Dear All,<br/>
                            It is to inform you that due to some maintenance of the water pipeline, the water supply will be temporarily stopped from 9:00 AM - 5:00 PM on 15th-March-2022, especially in Boys Hostel. Therefore everyone is requested to store some water for tomorrow.
                        </div>
                        <div className="postedby">
                            Posted By : <span>Dr. Rakesh Matam</span>
                        </div>
                        <div className="deletenotice">
                            DELETE <img src={Deleteimg} alt="delete" />
                        </div>
                    </div>
                    <div className="noticebox">
                        <div className="date">14 March 2022</div>
                        <div className="notice">
                            Dear All,<br/>
                            It is to inform you that due to some maintenance of the water pipeline, the water supply will be temporarily stopped from 9:00 AM - 5:00 PM on 15th-March-2022, especially in Boys Hostel. Therefore everyone is requested to store some water for tomorrow.
                        </div>
                        <div className="postedby">
                            Posted By : <span>Dr. Rakesh Matam</span>
                        </div>
                        <div className="deletenotice">
                            DELETE <img src={Deleteimg} alt="delete" />
                        </div>
                    </div>
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
  )
}
