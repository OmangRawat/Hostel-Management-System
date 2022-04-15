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
import { add_St, del_St, edit_St, retrive_St } from '../../endpoints/endpoint';
import { W_Edit_St_Popup } from './W_Edit_St_Popup';
// import { Popup } from './Popup';


const columns = [
  { id: 'rollNo', label: 'Roll No', minWidth: 120 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'branch',
    label: 'Branch',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'roomNo',
    label: 'Room No',
    minWidth: 120,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phNo',
    label: 'Mobile',
    minWidth: 170,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Delete',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [students, setStudents]  =React.useState([]);
  const [editSt, seteditSt]  =React.useState([]);

React.useEffect(() => {
  // addSt();
  // delSt();
  // editSt();
  retriveSt();
}, []);

const retriveSt = async() =>{
  let response = {};
  response = await retrive_St();
  setStudents(response);
  console.log(response);
}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const printValue = (id) => {
    // do something here
    // setModalIsOpen(true)
    console.log(id)
    delSt(id)
  }

  const delSt = async (id) =>{
    let response = {};
    let message = {'queryId': id};
    response = await del_St(message)
    retriveSt();
    console.log(response)
    }

    const editStudent = (id) => {
      console.log(id)
      seteditSt(id)
      setModalIsOpen(true)
    }

    const childToParent = (childdata) => {
      console.log(childdata)
      setModalIsOpen(false)
      retriveSt();
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
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['rollNo']}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return column.id === 'density'? 
                        <TableCell key={column.id} align={column.align}>
                          <Button variant="outlined" className='all_row_btns' sx = {{
                            fontFamily: "'Fredoka', sans-serif",
                            '&:hover': {
                              color: "white",
                              border: "1px solid white",
                              background: "#1a7cdd",
                              fontFamily: "'Fredoka', sans-serif",
                            },
                          }} onClick = {() => printValue(row['_id']) }>Delete</Button>
                        </TableCell>

                      :    
                      column.id === 'edit'?   
                        <TableCell key={column.id} align={column.align}>
                            <Button variant="outlined" className='all_row_btns' sx = {{
                              fontFamily: "'Fredoka', sans-serif",
                              '&:hover': {
                                color: "white",
                                border: "1px solid white",
                                background: "#1a7cdd",
                                fontFamily: "'Fredoka', sans-serif",
                              },
                            }} onClick = {() =>editStudent(row) }>Edit</Button>
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
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal isOpen={modalIsOpen}  style = {customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        <Button onClick={() => popUpclose("close")} sx = {{    border: '1px solid',  borderBottom: 'none'}}>x</Button>
        <W_Edit_St_Popup childToParent={childToParent} editSt = {editSt}/>
      </Modal>
    </Paper>
  </>
  );
}
