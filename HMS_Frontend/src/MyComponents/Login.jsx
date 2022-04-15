import React from 'react'
import { Navigate } from "react-router-dom";
import profile from "../Images/profile.svg"
import "../css/login.css"
import { get_User_Cred } from '../endpoints/endpoint';

export const Login = () => {
    const [username, setUserName ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [redirect, setRedirect ] = React.useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${username}`)
        // alert(`The password you entered was: ${password}`)
        login_Handler()
    }

    const login_Handler = async() =>{
        let response = {};
        let message = { 'username': username, 'passwrd': password }
        response = await get_User_Cred(message);
        if(response.message === '404'){
            alert('wrong cred.....Try again');
        }
        else{
            console.log(response.id)
            console.log(response.role)
            localStorage.setItem('id', response.id)
            localStorage.setItem('role', response.role)
            setRedirect(response.role)
        }
    }

    if (redirect === 1) {
        console.log("inside status: " + redirect)
        return <Navigate to='/student' />
    }
    else if (redirect === 2) {
        console.log("inside status: " + redirect)
        return <Navigate to='/guards' />
    }
    else if (redirect === 3) {
        console.log("inside status: " + redirect)
        return <Navigate to='/cleaningService' />
    }
    else if (redirect === 4) {
        console.log("inside status: " + redirect)
        return <Navigate to='/warden' />
    }
    else if (redirect === 5) {
        console.log("inside status: " + redirect)
        return <Navigate to='/caretaker' />
    }

    else return (
    <div>
          <div className="pagecontainer">
        <div className="maincontainer">
            <div className="leftcontainer">
                <img src={profile} alt="profile" />
            </div>
            <div className="rightcontainer">
                <div className="logincontainer">
                    <div className="infocontainer">
                        {/* <form action="" method="post" onSubmit={handleSubmit}> */}
                        <form onSubmit={handleSubmit}>
                            <div className="infobox">
                                <div className="infoname">
                                    {/* <label className="labels" for="">Email ID</label>
                                    <label className="labels" for="">Password</label> */}
                                    <label className="labels">Email ID</label>
                                    <label className="labels">Password</label>
                                </div>
                                <div className="inputs">
                                    <input type="email" name="" className="in_email" value={username} onChange={(e) => setUserName(e.target.value)}/>
                                    <input type="password" name="" id="in_password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            {/* <div className="pagechange">
                                <span className="gotosignup">Create new account</span>
                                <span className="forgotpsw">Forgot Password</span>
                            </div> */}
                            <div className="errormsg"></div>
                            <input id="submit" type="submit" value="Log In" />
                            <div className="line"> ------------ Welcome Onboard  ------------ </div>
                            <div className="googlelogin"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
