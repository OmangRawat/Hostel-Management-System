import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@material-ui/core';
// import DeleteIcon from '@mui/icons-material/Delete';
import MaterialTable from "material-table";
import '../css/test.css'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Batch', minWidth: 100 },
  {
    id: 'population',
    label: 'RollNo',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Branch',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Density',
    label: 'Query',
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
  // createData('India', 'IN', 1324171354, 3287263),
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),

  createData('Vaibhav Kesarwani', '2023', 1901212, 'CS'),
  createData('Vishesh Sharma'   , '2023', 1901217, 'CS'),
  createData('Omang Rawat'      , '2023', 1901126, 'CS'),
  createData('Aman Agarwal'     , '2023', 1901012, 'CS'),
  createData('Aditya Sharma'    , '2023', 1901017, 'CS'),
  createData('Sangaja Patel'    , '2023', 1901168, 'CS'),
  createData('Sarthak Gupta'    , '2023', 1901175, 'ECE'),
  createData('Rahul Soni'       , '2023', 1901154, 'CS'),
  createData('Utkarsh'          , '2023', 1901210, 'CS'),
  createData('Shevya Tripathi'  , '2023', 1901181, 'ECE'),
  createData('Ashna Basotia'    , '2023', 1901018, 'CS'),
  createData('Nikhil Naurya'    , '2023', 1901145, 'CS'),
  createData('Amitesh Kumar'    , '2023', 1901010, 'CS'),
  createData('Anirudh Singh'    , '2023', 1901011, 'CS'),
  createData('Swaraj Kesarwani' , '2023', 1901205, 'CS'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // var deleteIcon =
  // (<IconButton onClick={console.log(value)}>
  //   <DeleteIcon color="secondary" />
  // </IconButton>
  // );

  const printValue = (value) => {
    // do something here
    console.log(value)
  }

  return (
    <div className="test">
    <div className="testinner1">
    <Paper sx={{ width: '50%', overflow: 'hidden' }} className = "testinner" >
      <TableContainer sx={{ maxHeight: 1000 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          {/* <IconButton onClick={() => printValue(value)}>
                            <DeleteIcon color="secondary" />
                          </IconButton> */}
                          <div></div>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </div>
  );
}