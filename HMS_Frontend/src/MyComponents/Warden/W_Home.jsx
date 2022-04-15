import React from 'react'
import '../../css/Warden/W_Home.css'
import { W_Sidebar } from './W_Sidebar'
import { W_Add_St } from './W_Add_St'
import StickyHeadTable from './W_Table'
import { Navigate } from "react-router-dom";
import { Navbar } from '../Navbar'

export const W_Home = () => {

    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '4'){
        return <Navigate to='/login' />
    }

    else return (
        <>
        <Navbar />
        <div className='w_container'>        
            <div className="w_left_container">
                <W_Sidebar />
            </div>
            <div className="w_right_container">
                <div className="w_add_st_container">
                    <W_Add_St />
                </div>
                <div className="table_container">
                    < StickyHeadTable />
                </div>
            </div>
    </div>
    </>
    )
}
