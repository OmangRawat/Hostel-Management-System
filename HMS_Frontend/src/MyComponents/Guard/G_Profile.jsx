import React from 'react'
import '../../css/Student/S_Home.css'
import male_avatar from '../../Images/male_ava.svg'
import { get_St_Det } from '../../endpoints/endpoint';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../Navbar';

export const G_Profile = () => {
  const [name, setName] = React.useState('');
  const [phNo, setPhNo] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
        getGDetails();
  }, []);

  const getGDetails = async () =>{
    let response = {};
    let message = { 'id': localStorage.getItem('id') , 'role': localStorage.getItem('role')}
    response = await get_St_Det(message)
    console.log(response)
    setName(response.name)
    setPhNo(response.phNo)
    // setEmail(response.email)
  }

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
        <div className="containerA">
        <div className="leftcontainerA">
            <div className="imgcontainer">
                <img src={male_avatar} alt="male_avatar" />
            </div>
            <p id="name">
                {name}
            </p>
        </div>
        <div className="rightcontainerA">
            <p className="info_item_left">
                Mobile No.: <span className="info_item_right"> {phNo}</span>
            </p>
        </div>
    </div>
    </>
  )
}
