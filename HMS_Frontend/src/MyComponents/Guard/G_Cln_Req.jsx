import React from 'react'
import { Sidebar } from './G_Sidebar'
import "../../css/Guard/Guard_home.css"
import StickyHeadTable_Clean from './G_Cln_Table'
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar';
import { G_Cln_Sidebar } from './G_Cln_Sidebar'

export const G_Cln_Req = () => {

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
                <G_Cln_Sidebar />
            </div>
            <div className="gh_right_container gh_right_container_g_cln">
                <div className="table_container">
                    < StickyHeadTable_Clean />
                </div>
            </div>
        </div>
    </>
  )
}
