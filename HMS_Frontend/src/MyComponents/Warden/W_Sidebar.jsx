import React from 'react'
import '../../css/Warden/W_Sidebar.css'
import task_icn from "../../Images/task_1.gif"

export const W_Sidebar = () => {
  return (
      <div className='W_Sidebar_container'>
        <div className="subject">
            Navigation
        </div>
        <div className="line">
            <hr/>
        </div>
        <div className="buttons">
            <div className="btn1 allbtn">
                <img src={task_icn} alt="task_icn" className="icn1 allicn" />
                Students
            </div>
        </div>
      </div>
  )
}
