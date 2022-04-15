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
import { Accept_Spt_Eqp, Close_Spt_Eqp, get_Spt_Eqp_Det, G_Get_Cln_Det } from '../../endpoints/endpoint';


const columns = [
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'rollNo', label: 'Roll Number', minWidth: 100 },
  { id: 'eqp', label: 'Equipment', minWidth: 100 },
  { id: 'density', label: 'Accept Request', minWidth: 100 },
];

export default function StickyHeadTable_Sports_Return() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sptDetails, setSptDetails] = React.useState([]);

  React.useEffect(() => {
        GRetriveSpt();
  }, []);

const GRetriveSpt = async () =>{
        let response = {};
        let message = {
          'data': '1'
        }
        response = await get_Spt_Eqp_Det(message)
        console.log(response)
        setSptDetails(response)
}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const printValue = (value1) => {
    // do something here
    closeSptEqp(value1);
    GRetriveSpt();
  }

  const closeSptEqp = async(value1) =>{
    let response = {};
    let message = {
      "queryId": value1,
    };
    response = await Close_Spt_Eqp(message);
    console.log(response)
    
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
            {sptDetails.length == 0?
                <TableRow hover role="checkbox" tabIndex={-1} >
                {columns.map((column) => {
                  return (
                    <TableCell key={column.id} align={column.align}sx = {{
                      fontFamily: "'Fredoka', sans-serif",
                      '&:hover': {
                        cursor: "pointer",
                        color: "white",
                        background: "#1a7cdd",
                      },
                      }}>
                      No Data To Display
                    </TableCell>
                  );
                })}
              </TableRow>
              :
              sptDetails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.sample['rollNo']}>
                  {columns.map((column) => {
                    const value = row.sample[column.id];
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
                        }} onClick = {() => printValue(row.sample['queryId']) }>Close Request</Button>
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
        count={sptDetails.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </>
  );
}
