import React from 'react'
import "../../css/Guard/Guard_home.css"
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar';
import StickyHeadTable_Sports_Return from './G_Spt_Return_Table';
import { G_Spt_Return_Sidebar } from './G_Spt_Return_Sidebar';

export const G_Spt_Return = () => {

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
                <G_Spt_Return_Sidebar />
            </div>
            <div className="gh_right_container gh_right_container_spt_return">
                <div className="table_container">
                    < StickyHeadTable_Sports_Return />
                </div>
            </div>
        </div>
    </>
  )
}
