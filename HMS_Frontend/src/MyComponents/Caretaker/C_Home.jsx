import React from 'react'
import '../../css/Caretaker/C_Home.css'
import { C_Sidebar } from './C_Sidebar'
import { C_Add_G_Emp } from './C_Add_G_Emp'
import { Navigate } from "react-router-dom";
import StikyHeadTable from './C_Table'
import { Navbar } from '../Navbar'


export const C_Home = () => {

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
                    <C_Sidebar />
                </div>
                <div className="c_right_container">
                    <div className="c_add_g_emp_container">
                        <C_Add_G_Emp />
                    </div>
                    <div className="table_container">
                        < StikyHeadTable />
                    </div>
                </div>
            </div>
    </>
  )
}
