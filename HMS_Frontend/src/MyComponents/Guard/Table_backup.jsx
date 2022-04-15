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
import { faWeight } from '@fortawesome/free-solid-svg-icons';
// import "../../css/Guard/Guard_home.css"
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import { Popup } from './Popup';
import axios from "axios";


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [studentQueries, setstudentQueries]  =React.useState([]);


  React.useEffect(() => {
    let received_data = {}
    const message = { data: 'send room queries data'}
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
  };
    axios.post("http://localhost:5000/guards/roomQueries", message, config)
        .then(response => {
            // received_data = response.stu
            console.log(response.data)
        })
        
        .catch(error => {
            console.log(error)
        });

        // console.log(received_data);

    }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const printValue = (value) => {
    // do something here
    setModalIsOpen(true)
    console.log(value)
  }
  const popUpclose = (value) => {
    // do something here
    setModalIsOpen(false)
    console.log(value)
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      
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
                          }} onClick = {() => printValue(row['population']) }>Detail</Button>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
        <Popup />
      </Modal>
    </Paper>
  </>
  );
}
