import React from 'react'
import '../../css/Student/S_Home.css'
import male_avatar from '../../Images/male_ava.svg'
import { get_St_Det } from '../../endpoints/endpoint';
import { Navbar } from '../Navbar';
import { Navigate } from 'react-router-dom';

export const W_Profile = () => {
  const [name, setName] = React.useState('');
  const [phNo, setPhNo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
        getWDetails();
  }, []);

  const getWDetails = async () =>{
    let response = {};
    let message = { 'id': localStorage.getItem('id') , 'role': localStorage.getItem('role')}
    response = await get_St_Det(message)
    console.log(response)
    setName(response.name)
    setPhNo(response.phNo)
    setEmail(response.email)
    setAddress(response.address)
  }

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
                Mobile No. : <span className="info_item_right"> {phNo}</span>
            </p>
            <p className="info_item_left">
                Email : <span className="info_item_right"> {email}</span>
            </p>
            <p className="info_item_left">
                Address : <span className="info_item_right"> {address}</span>
            </p>
        </div>
    </div>
    </>
  )
}
