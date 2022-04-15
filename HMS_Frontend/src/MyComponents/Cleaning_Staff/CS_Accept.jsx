import React from 'react'
import { CS_Sidebar } from './CS_Sidebar'
import StickyHeadTable_Accept from './CS_Accept_Table'
import { Navigate } from "react-router-dom";
import '../../css/Cleaning_Staff/CS_Home.css'
import { Navbar } from '../Navbar';
import { CS_Accept_Sidebar } from './CS_Accept_Sidebar';


export const CS_Accept = () => {
    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '3'){
        return <Navigate to='/login' />
    }

  else return (
      <>
      <Navbar />
    <div className='cs_container'>        
        <div className="cs_left_container">
            <CS_Accept_Sidebar />
        </div>
        <div className="cs_right_container">
            <div className="table_container">
                < StickyHeadTable_Accept />
            </div>
        </div>
    </div>
    </>
  )
}
