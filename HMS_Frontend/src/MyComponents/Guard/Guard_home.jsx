import React from 'react'
import {Sidebar} from './G_Sidebar'
import StickyHeadTable from './G_Table'
import { Navigate } from "react-router-dom";
import "../../css/Guard/Guard_home.css"
import { Navbar } from '../Navbar';

export const Guard_home = () => {
    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '2'){
        return <Navigate to='/login' />
    }

  else return (
      <>
      <Navbar />
    <div className='gh_container'>
        <div className="gh_left_container">
            <Sidebar />
        </div>
        <div className="gh_right_container gh_right_container_room_q">
            <div className="table_container">
                < StickyHeadTable />
            </div>
        </div>
    </div>
    </>
  )
}
