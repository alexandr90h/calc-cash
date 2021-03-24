import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from '../redux/operation';

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
dateFormat.i18n = {
  dayNames: [
    'Нд',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'Пятниця',
    'Субота',
  ],
};

export default function ListItemsCash() {
  const classes = useStyles();
  const sum = useSelector(state => state.summ);
  const rows = useSelector(state => state.cashList);
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
                {dateFormat(row.createdAt, 'mm.dd.yyyy, dddd, HH:MM')}
              </StyledTableCell>
              <StyledTableCell align="right">{row.thousand}</StyledTableCell>
              <StyledTableCell align="right">{row.fiveHundred}</StyledTableCell>
              <StyledTableCell align="right">{row.twoHundred}</StyledTableCell>
              <StyledTableCell align="right">{row.hundred}</StyledTableCell>
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
