import * as React from 'react'
import '../css/Navbar.css'
import { Navigate } from "react-router-dom";

export const Navbar = () => {

  const logout = () =>{
    localStorage.clear();
    sessionStorage.clear();
    // setStatus(1)
    window.location.href = '/login';
  }

  const toDashboard = () =>{
    // return <Navigate to='/dashboard' />
    window.location.href = '/dashboard';
  }

  const toHome = () =>{
    let role = localStorage.getItem('role')
    if (role == '1'){
      window.location.href = '/student';
    }
    else if(role == '2'){
      window.location.href = '/guards'

    }
    else if(role == '3'){
      window.location.href ='/cleaningService'

    }
    else if(role == '4'){
      window.location.href = '/warden' 
    }
    else if(role == '5'){
      window.location.href = '/caretaker' 
      
    }
  }

  const toProfile = () =>{
    let role = localStorage.getItem('role')
    if (role == '1'){
      window.location.href = '/student/profile';
    }
    else if(role == '2'){
      window.location.href = '/guards/profile'

    }
    else if(role == '3'){
      window.location.href ='/cleaningService/profile'

    }
    else if(role == '4'){
      window.location.href = '/warden/profile' 
    }
    else if(role == '5'){
      window.location.href = '/caretaker/profile' 
      
    }
  }

return (
        <nav className="S_navbarcontainer">
            <div className="logo">
                HMS
            </div>
            <p onClick={()=> toHome()}>Home</p>
            <p onClick={()=> toDashboard()}>Dashboard</p>
            <p onClick={()=> toProfile()}>Profile</p>
            <p>
                <button onClick={()=> logout()}>Logout</button>
            </p>
    </nav>
  )
}
