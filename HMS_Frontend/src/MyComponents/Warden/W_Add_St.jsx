// import React from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import '../../css/Warden/W_Add_St.css'
import { W_Add_St_Popup } from './W_Add_St_Popup';

export const W_Add_St = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [data, setData] = React.useState('');

  const customStyles = {
    content : {
      top                   : '51%',
      left                  : '59%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '65vw',
      height                 : '60vh',
      // marginRight           : '-50%',
      transform             : 'translate(-70%, -60%)',
      overflow              : 'none',
      // backgroundColor       : '#F0AA89',  
      border                : 'none',  
    }
};

const printValue = (value1) => {
  // do something here
  setModalIsOpen(true)
  console.log(value1)
}

const popUpclose = (value) => {
  // do something here
  setModalIsOpen(false)
  console.log(value)
}

const childToParent = (childdata) => {
  console.log(childdata)
  setModalIsOpen(false)
  window.location.reload();
}

  return (
    <div className='w_add_st'>
        <button className='w_add_st_btn' onClick = {() => printValue('testing') }>
            Add Student
        </button>
        <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
          <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
          <W_Add_St_Popup  childToParent={childToParent}/>
      </Modal>
    </div>
  )
}
