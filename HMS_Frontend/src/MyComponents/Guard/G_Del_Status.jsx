import React from 'react'
import { Sidebar } from './G_Sidebar'
import "../../css/Guard/Guard_home.css"
import StickyHeadTable_Delivery from './G_Del_Table'
import { G_Del_Btn } from './G_Del_Btn'
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar';
import { G_Del_Sidebar } from './G_Del_Sidebar'


export const G_Del_Status = () => {

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
                <G_Del_Sidebar />
            </div>
            <div className="gh_right_container gh_right_container_del">
                <div className="w_add_st_container">
                    <G_Del_Btn />
                </div>
                <div className="table_container">
                    < StickyHeadTable_Delivery />
                </div>
            </div>
        </div>  
    </>
  )
}
