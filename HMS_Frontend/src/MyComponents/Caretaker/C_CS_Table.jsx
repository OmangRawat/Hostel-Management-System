import * as React from 'react';
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
import { delete_Emp, retrive_Emp } from '../../endpoints/endpoint';
import { C_Edit_CS_Popup } from './C_Edit_CS_Popup';
// import { Popup } from './Popup';


const columns = [
  { id: 'jobId', label: 'Job Id', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'phNo',
    label: 'Mobile',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'onDuty',
    label: 'Status',
    minWidth: 100,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Delete',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
    {
    id: 'edit',
    label: 'Edit',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable_CS() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [employee, setEmployee]  =React.useState([]);
  const [editCS, setEditCS]  =React.useState([]);

  React.useEffect(() => {
    retriveEmp();
  }, []);
  
  const retriveEmp = async() =>{
    let response = {};
    response = await retrive_Emp();
    setEmployee(response);
    console.log(response);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const printValue = (value, value2) => {
    console.log(value)
    console.log(value2)
    deleteGEmp(value);
  }

  const deleteGEmp = async(value) =>{
    let response = {}
    let message = {'queryId': value}
    response = await delete_Emp(message);
    console.log(response)
    retriveEmp();
  }

  const editEmp = (id) => {
    console.log(id)
    setEditCS(id)
    setModalIsOpen(true)
  }

  const childToParent = (childdata) => {
    console.log(childdata)
    setModalIsOpen(false)
    retriveEmp();
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
      height                 : '60vh',
      // marginRight           : '-50%',
      transform             : 'translate(-70%, -60%)',
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
            {employee
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['phNo']}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return column.id === 'edit'? 
                      <TableCell key={column.id} align={column.align}>
                        <Button variant="outlined" className='all_row_btns' sx = {{
                          fontFamily: "'Fredoka', sans-serif",
                          '&:hover': {
                            color: "white",
                            border: "1px solid white",
                            background: "#1a7cdd",
                            fontFamily: "'Fredoka', sans-serif",
                          },
                        }} onClick = {() => editEmp(row) }>Edit</Button>
                      </TableCell>
                      :column.id === 'density'? 
                        <TableCell key={column.id} align={column.align}>
                          <Button variant="outlined" className='all_row_btns' sx = {{
                            fontFamily: "'Fredoka', sans-serif",
                            '&:hover': {
                              color: "white",
                              border: "1px solid white",
                              background: "#1a7cdd",
                              fontFamily: "'Fredoka', sans-serif",
                            },
                          }} onClick = {() => printValue(row['_id'], row['onDuty']) }>Delete</Button>
                        </TableCell>

                      :                      
                        <TableCell key={column.id} align={column.align} className = "row_entry" sx = {{
                              fontFamily: "'Fredoka', sans-serif" ,
                              fontSize: "18px" ,
                            }}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
                            {typeof value === 'boolean' ? value ? "On Duty": "Off Duty"  : value}                 
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
        count={employee.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
        <C_Edit_CS_Popup childToParent={childToParent} editCS = {editCS}/>
      </Modal>
    </Paper>
  </>
  );
}
