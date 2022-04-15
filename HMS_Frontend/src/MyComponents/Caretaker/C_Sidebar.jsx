import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Caretaker/C_Sidebar.css'
import task_icn from "../../Images/task_1.gif"

export const C_Sidebar = () => {
    const mystyle = {
        cursor: "pointer",
        backgroundColor: "#1a7cdd",
        color: "white",
      };
  return (
      <div className='C_Sidebar_container'>
        <div className="subject">
            Navigation
        </div>
        <div className="line">
            <hr/>
        </div>
        <div className="buttons">
            <Link to = '/caretaker/guards'>
                <div className="btn1 allbtn" style={mystyle}>
                    <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                    Guard Staff
                </div>
            </Link>
            <Link to = '/caretaker/cleaningService'>
                <div className="btn1 allbtn">
                    <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                    Cleaning Staff
                </div>
            </Link>
        </div>
      </div>
  )
}
