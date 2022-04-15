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
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import { CS_Popup } from './Popup';
import '../../css/Cleaning_Staff/CS_table.css';
import { accept_Cln_Req, retrive_Cln_Req } from '../../endpoints/endpoint';

const columns = [
  { id: 'roomNo', label: 'Room Number', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },
  
  {
    id: 'density',
    label: 'Accept Request',
    minWidth: 170,
    align: 'right',
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
  const [clnRequests, setClnRequests] = React.useState([]);

  React.useEffect(() => {
    // addSt();
    // delSt();
    // editSt();
    retriveClnReq();
  }, []);
  
  const retriveClnReq = async() =>{
    let response = {};
    response = await retrive_Cln_Req();
    // setStudents(response);
    setClnRequests(response)
    console.log(response);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeToDone = async(id) => {
    let response = {}
    let message = { 
        'reqId': id,
        'emp_id': localStorage.getItem('id'),
    }
    response = await accept_Cln_Req(message);
    console.log(response)
    // do something here
   console.log(id)
   retriveClnReq();
  }

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
            {clnRequests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['i']['_id']}>
                    {columns.map((column) => {
                      const value = row['i'][column.id];
                      return column.id === 'density'? 
                        <TableCell key={column.id} align={column.align}>
                          <button className="all_row_btns" onClick={() => changeToDone(row['i']['_id'])}>Accept</button>
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
        count={clnRequests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </>
  );
}
