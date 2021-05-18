import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Button, setRef } from '@material-ui/core';

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

export default function ListItemsCash() {
  const setingList = useSelector(state => state.setingList);
  const classes = useStyles();
  const rows = useSelector(state => state.cashList);
  const [filtersRows, setFiltersRows] = useState(() => {
    if (setingList.visibleMonth === 'all') {
      return rows;
    }
    return rows.filter(
      obj =>
        format(parseISO(obj.createdAt), 'LLLL yyyy', {
          locale: uk,
        }) === setingList.visibleMonth,
    );
  });
  const monthArr = [];

  rows.map(obj => {
    if (
      !monthArr.includes(
        format(parseISO(obj.createdAt), 'LLLL yyyy', {
          locale: uk,
        }),
      )
    ) {
      monthArr.push(
        format(parseISO(obj.createdAt), 'LLLL yyyy', {
          locale: uk,
        }),
      );
    }
  });

  const isChangeFilter = e => {
    // e.preventDefault();
    if (e.currentTarget.value != 'all') {
      setFiltersRows(
        rows.filter(
          obj =>
            format(parseISO(obj.createdAt), 'LLLL yyyy', {
              locale: uk,
            }) === e.currentTarget.value,
        ),
      );
    } else {
      setFiltersRows(rows);
    }
  };
  return (
    <>
      <section className="listButtonFilter">
        <Button
          variant="contained"
          color="primary"
          value="all"
          onClick={isChangeFilter}
        >
          Все
        </Button>
        {monthArr.map(month => (
          <Button
            variant="contained"
            color="primary"
            value={month}
            key={month}
            onClick={isChangeFilter}
          >
            {month}
          </Button>
        ))}
      </section>
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
            {filtersRows.map(row => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {format(parseISO(row.createdAt), 'dd.LL.yyyy, EEEE, k:m', {
                    locale: uk,
                  })}
                </StyledTableCell>
                <StyledTableCell align="right">{row.thousand}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.fiveHundred}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.twoHundred}
                </StyledTableCell>
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
    </>
  );
}
