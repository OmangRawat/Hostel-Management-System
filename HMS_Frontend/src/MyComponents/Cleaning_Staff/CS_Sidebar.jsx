import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Cleaning_Staff/CS_Sidebar.css'
import task_icn from "../../Images/task_1.gif"

export const CS_Sidebar = () => {

    const mystyle = {
        cursor: "pointer",
        backgroundColor: "#1a7cdd",
        color: "white",
      };
  return (
      <div className='CS_Sidebar_container'>
        <div className="subject">
            Navigation
        </div>
        <div className="line">
            <hr/>
        </div>
        <div className="buttons">
            <Link to = '/cleaningService/cleaningRequest'>

                <div className="btn1 allbtn" style={mystyle}>
                    <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                    Cleaning Requests
                </div>
                </Link>
            <Link to = '/cleaningService/acceptedRequest'>

                <div className="btn2 allbtn">
                    <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                    Accepted Requests
                </div>
            </Link>
        </div>
      </div>
  )
}
