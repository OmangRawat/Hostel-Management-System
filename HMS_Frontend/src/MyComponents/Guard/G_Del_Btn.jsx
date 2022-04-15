import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import '../../css/Warden/W_Add_St.css'
import { G_Del_Popup } from './G_Del_Popup';

export const G_Del_Btn = () => {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [data, setData] = React.useState('');
  
    const customStyles = {
      content : {
        top                   : '51%',
        left                  : '59%',
        right                 : 'auto',
        bottom                : 'auto',
        width                 : '65vw',
        // marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
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
            Add Deliver
        </button>
        <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
            <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
            <G_Del_Popup childToParent={childToParent}/>
        </Modal>
    </div>
  )
}
