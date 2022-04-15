import React from 'react'
import '../../css/Caretaker/C_Home.css'
import { C_Sidebar } from './C_Sidebar'
import { C_Add_CS } from './C_Add_CS'
import { Navigate } from "react-router-dom";
import { Navbar } from '../Navbar'
import StickyHeadTable_CS from './C_CS_Table';
import { C_E_Sidebar } from './C_E_Sidebar';


export const C_CS_Home = () => {

    if (localStorage.getItem('id') == null) {
        console.log("inside status: go to login")
        alert('login to access your account')
        return <Navigate to='/login' />
    }
    else if(localStorage.getItem('role') !== '5'){
        return <Navigate to='/login' />
    }

  else return (
      <>
            <Navbar />
            <div className='c_container'>        
                <div className="c_left_container">
                    <C_E_Sidebar />
                </div>
                <div className="c_right_container">
                    <div className="c_add_g_emp_container">
                        <C_Add_CS />
                    </div>
                    <div className="table_container">
                        < StickyHeadTable_CS />
                    </div>
                </div>
            </div>
    </>
  )
}
