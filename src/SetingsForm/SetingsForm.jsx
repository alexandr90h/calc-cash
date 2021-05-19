import { useDispatch, useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React, { useState } from 'react';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import dateFormat from 'dateformat';
import { Button } from '@material-ui/core';
import * as API from '../api/api';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import * as operation from '../redux/operation';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SetingsForm() {
  const monthArr = ['all'];
  const { other, visibleMonth } = useSelector(state => state.setingList);
  const [data, setData] = useState({ other, visibleMonth });
  const rows = useSelector(state => state.cashList);
  const classes = useStyles();
  const dispatch = useDispatch();

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
  const submitSetingForm = async e => {
    e.preventDefault();
    await API.addSeting(data);
    dispatch(operation.getSeting());
  };

  return (
    <form className="setingForm" onSubmit={submitSetingForm}>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Сума боргу
        </InputLabel>
        <BootstrapInput
          value={data.other}
          id="bootstrap-input"
          name="data[other]"
          onChange={e => {
            setData({ ...data, other: e.target.value });
          }}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="demo-customized-select-native">
          Поточній місяць
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          // value={setingList.visibleMonth}
          onChange={e => {
            setData({ ...data, visibleMonth: e.target.value });
          }}
          input={<BootstrapInput />}
          defaultValue={visibleMonth}
        >
          {monthArr.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Зберегти
      </Button>
    </form>
  );
}
