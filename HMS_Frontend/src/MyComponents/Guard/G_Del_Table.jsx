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
import { G_Retrive_Del, G_Del_Status } from '../../endpoints/endpoint';

const columns = [
  { id: 'deliveryId', label: 'Delivery Id', minWidth: 100 },

    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'Left',
        // format: (value) => value.toLocaleString('en-US'),
      },
  { id: 'DateRecieved', label: 'Date', minWidth: 170 },
//   { id: 'deliveryId', label: 'Delivery Id', minWidth: 100 },
//   {
//     id: 'name',
//     label: 'Name',
//     minWidth: 170,
//     align: 'center',
//     // format: (value) => value.toLocaleString('en-US'),
//   },
  {
    id: 'density',
    label: 'Change Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


export default function StickyHeadTable_Delivery() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deliveryDet, setDeliveryDet] = React.useState([]);


  React.useEffect(() => {
        GRetriveDel();
  }, []);

  const GRetriveDel = async () =>{
        let response = {};
        response = await G_Retrive_Del()
        console.log(response)
        setDeliveryDet(response)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeStatus = async(id) => {
    // do something here
    let response = {}
    console.log(id)
    let message = { 'queryId': id };
    response = await G_Del_Status(message);
    console.log(id)
    GRetriveDel();
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
            {deliveryDet
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['deliveryId']}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      
                      return column.id === 'density'? row['deliveryStatus'] === true ? 
                      <TableCell key={column.id} align={column.align}>DELIVERED</TableCell> : 
                        <TableCell key={column.id} align={column.align}>
                          <Button variant="outlined" className='all_row_btns' sx = {{
                            fontFamily: "'Fredoka', sans-serif",
                            '&:hover': {
                              color: "white",
                              border: "1px solid white",
                              background: "#1a7cdd",
                              fontFamily: "'Fredoka', sans-serif",
                            },
                          }} onClick = {() => changeStatus(row['_id']) }>Change Status</Button>
                          
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
        count={deliveryDet.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </>
  );
}
