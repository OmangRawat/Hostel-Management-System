import React from 'react'
import "../../css/Guard/Guard_home.css"
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar';
import StickyHeadTable_Sports from './G_Spt_Table'
import { G_Spt_Sidebar } from './G_Spt_Sidebar';

export const G_Spt_Req = () => {

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
                <G_Spt_Sidebar />
            </div>
            <div className="gh_right_container gh_right_container_spt_req">
                <div className="table_container">
                    < StickyHeadTable_Sports />
                </div>
            </div>
        </div>
    </>
  )
}
