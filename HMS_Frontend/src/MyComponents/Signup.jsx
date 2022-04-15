import React from 'react'
import register from "../Images/register.svg"
import "../css/signup.css"

export const Signup = () => {
  return (
    <div>
            <div className="pagecontainer">
        <div className="maincontainer">
            <div className="leftcontainer">
                <img src={register} alt="register" />
            </div>
            <div className="rightcontainer">
                <div className="signupcontainer">
                    <div className="infocontainer">
                        <form action="" method="post">
                            <div className="infobox">
                                <div className="infoname">
                                    <label className="labels" for="">Email ID</label>
                                    <label className="labels" for="">Password</label>
                                    <label className="labels" for="">Confirm Password</label>
                                </div>
                                <div className="inputs">
                                    <input type="email" name="" className="in_email" />
                                    <input type="password" name="" id="in_password" />
                                    <input type="password" name="" id="cnf_password" />
                                </div>
                            </div>
                            <div className="pagechange">
                                {/* <!-- <span className="gotosignup">Log In</span> --> */}
                            </div>
                            <div className="errormsg"></div>
                            <input id="submit" type="submit" value="Register" />
                            <div className="line"> ---------------- or signup with ---------------- </div>
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
