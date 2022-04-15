import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Guard/Sidebar.css'
import task_icn from "../../Images/task_1.gif"

export const G_Cln_Sidebar = () => {

    const mystyle = {
        cursor: "pointer",
        backgroundColor: "#1a7cdd",
        color: "white",
      };

  return (
    <div className='Sidebar_container'>
        <div className="subject">
            Navigation
        </div>
        <div className="line">
            <hr/>
        </div>
        <div className="buttons">
            <Link to = '/guards/roomQueries'>
                <div className="btn1 allbtn" >
                    <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                    Hostel Issues
                </div>
            </Link>
            <Link to = '/guards/cleaningRequest'>
                <div className="btn2 allbtn" style={mystyle}>
                    <img src={task_icn} alt="task_icn" className="icn2 allicn" />
                    Cleaning Requests
                </div>
            </Link>
            <Link to = '/guards/deliveryStatus'>
                <div className="btn3 allbtn">
                    <img src={task_icn} alt="task_icn" className="icn3 allicn" />
                    Delivery Updates
                </div>
            </Link>
            <Link to = '/guards/sportsRequest'>
                <div className="btn3 allbtn">
                    <img src={task_icn} alt="task_icn" className="icn3 allicn" />
                    Sports Eqp Request
                </div>
            </Link>
            <Link to = '/guards/sportsEqpReturn'>
                <div className="btn3 allbtn">
                    <img src={task_icn} alt="task_icn" className="icn3 allicn" />
                    Close Sports Eqp Request
                </div>
            </Link>
        </div>
    </div>
  )
}
