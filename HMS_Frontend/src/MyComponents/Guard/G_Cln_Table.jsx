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
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import { Popup } from './Popup';
import "../../css/Guard/Guard_home.css"
import { G_Get_Cln_Det } from '../../endpoints/endpoint';


const columns = [
  { id: 'date', label: 'Date', minWidth: 120 },
  { id: 'roomNo', label: 'Room Number', minWidth: 100 },
  { id: 'staffname', label: 'Name', minWidth: 100 },
  { id: 'staffphNo', label: 'Phone No', minWidth: 100 },
  
  
];

export default function StickyHeadTable_Clean() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [clnDetails, setClnDetails] = React.useState([]);

  React.useEffect(() => {
        GRetriveCln();
  }, []);

const GRetriveCln = async () =>{
        let response = {};
        response = await G_Get_Cln_Det()
        console.log(response)
        setClnDetails(response)
}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
            {clnDetails
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['i']['roomNo']}>
                    {columns.map((column) => {
                      const value = row['i'][column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx = {{
                          fontFamily: "'Fredoka', sans-serif" ,
                          fontSize: "18px" ,
                        }}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
                            
                              { column.id === 'staffphNo' || column.id ==='staffname' ? value === '' || value === null ? "Not Assigned": value  : value} 
                              
                        </TableCell>
                      );
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
        count={clnDetails.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </>
  );
}
