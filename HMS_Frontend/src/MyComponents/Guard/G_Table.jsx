import * as React from 'react';
// import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
// import "../../css/Guard/Guard_home.css"
// import { IconButton } from '@material-ui/core';
// import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import { Popup } from './Popup';
// import axios from "axios";
import { G_Close_Query, Queries_Data } from '../../endpoints/endpoint';


const columns = [
  { id: 'rollNo', label: 'Roll No', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'roomNo',
    label: 'Room No',
    minWidth: 100,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phNo',
    label: 'Mobile',
    minWidth: 100,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Read Issue',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [studentQueries, setstudentQueries]  =React.useState([]);
  const [data, setData] = React.useState('');
  const [stQueryId, setstQueryId] = React.useState('');


  React.useEffect(() => {
  //   let received_data = {}
  //   const message = { data: 'send room queries data'}
  //   const config = {
  //     headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content_Type': 'application/json',
  //     }
  // };
  //   axios.post("http://localhost:5000/guards/roomQueries", message, config)
  //       .then(response => {
  //           // received_data = response.stu
  //           console.log(response.data)
  //           setstudentQueries(response.data)
  //       })
        
  //       .catch(error => {
  //           console.log(error)
  //       });

          get_queries();

        // console.log(received_data);

    }, []);

    const get_queries = async () =>{
      let response = {};
      response = await Queries_Data()
      console.log(response)
      setstudentQueries(response)
    }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const printValue = (value1, value2,value3) => {
    // do something here
    setModalIsOpen(true)
    sessionStorage.setItem('name', value1)
    sessionStorage.setItem('Query', value2)
    setstQueryId(value3)
  }
  const popUpclose = (value) => {
    // do something here
    setModalIsOpen(false)
    console.log(value)
  }

  const childToParent = async(childdata) => {
    console.log(childdata)
    setData(childdata)
    if (childdata === 'checked'){

      console.log('tested');
      console.log(stQueryId);

      let message = {'queryId': stQueryId}
      let response = {};
      response = await G_Close_Query(message)
      console.log(response)
      setModalIsOpen(false)
      get_queries();
    } 
    else{
      alert('Something went wrong....Click on the close request button again to close the request')
    }  
  }

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

  return (<>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        {/* <Table stickyHeader aria-label="sticky table"> */}
        <Table>
          <TableHead>
          {/* <div className="abctext"> */}

            <TableRow>
              {columns.map((column) => (
                // <div className="abctext">
                <TableCell className='abc'
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx = {{
                    fontWeight: 'bold',
                    fontFamily: "'Fredoka', sans-serif",
                    fontSize: "3vh",
                    color: "#1a7cdd",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            {/* </div> */}
          </TableHead>
          <TableBody>
            {studentQueries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                // console.log(row.sample)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.sample['rollNo']}>
                    {columns.map((column) => {
                      // console.log(row)
                      const value = row.sample[column.id];
                      // return column.id === 'density'? 
                      return column.id === 'density'? 
                        <TableCell key={column.id} align={column.align}>
                          {/* <IconButton onClick={() => printValue(row['population'])}>
                            <DeleteIcon color="secondary" />
                          </IconButton> */}
                          {/* <Button variant="contained" className='all_row_btns'>Contained</Button> */}
                          <Button variant="outlined" className='all_row_btns' sx = {{
                            fontFamily: "'Fredoka', sans-serif",
                            '&:hover': {
                              color: "white",
                              border: "1px solid white",
                              background: "#1a7cdd",
                              fontFamily: "'Fredoka', sans-serif",
                            },
                          }} onClick = {() => printValue(row.sample['name'], row.sample['Query'], row.sample['queryId']) }>Open Issue</Button>
                          {/* <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                            <Button onClick={() => popUpclose("close")}>x</Button>
                            <Popup />
                          </Modal> */}
                        </TableCell>

                      :                      
                        <TableCell key={column.id} align={column.align} className = "row_entry" sx = {{
                              fontFamily: "'Fredoka', sans-serif" ,
                              fontSize: "18px" ,
                            }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>;
                    })}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        
      </TableContainer>
        
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={studentQueries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid'}}>x</Button>
        <Popup childToParent={childToParent}/>
      </Modal>
    </Paper>
  </>
  );
}
