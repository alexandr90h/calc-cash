import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as API from '../api/api';
import { useState } from 'react';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ListItemsCash() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    API.getCash().then(data => setRows(data.data.list));
  }, [rows]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">1000</StyledTableCell>
            <StyledTableCell align="right">500</StyledTableCell>
            <StyledTableCell align="right">200</StyledTableCell>
            <StyledTableCell align="right">100</StyledTableCell>
            <StyledTableCell align="right">50</StyledTableCell>
            <StyledTableCell align="right">20</StyledTableCell>
            <StyledTableCell align="right">10</StyledTableCell>
            <StyledTableCell align="right">5</StyledTableCell>
            <StyledTableCell align="right">2</StyledTableCell>
            <StyledTableCell align="right">1</StyledTableCell>
            <StyledTableCell align="right">Other</StyledTableCell>
            <StyledTableCell align="right">Summ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.createdAt}
              </StyledTableCell>
              <StyledTableCell align="right">{row.thousand}</StyledTableCell>
              <StyledTableCell align="right">{row.hundred}</StyledTableCell>
              <StyledTableCell align="right">{row.fiveHundred}</StyledTableCell>
              <StyledTableCell align="right">{row.twoHundred}</StyledTableCell>
              <StyledTableCell align="right">{row.fifty}</StyledTableCell>
              <StyledTableCell align="right">{row.twenty}</StyledTableCell>
              <StyledTableCell align="right">{row.ten}</StyledTableCell>
              <StyledTableCell align="right">{row.five}</StyledTableCell>
              <StyledTableCell align="right">{row.two}</StyledTableCell>
              <StyledTableCell align="right">{row.one}</StyledTableCell>
              <StyledTableCell align="right">{row.other}</StyledTableCell>
              <StyledTableCell align="right">{row.sum}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
