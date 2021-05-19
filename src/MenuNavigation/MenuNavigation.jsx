import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MenuNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(() => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/stats':
        return 1;
      case '/list':
        return 2;
      case '/debts':
        return 3;
      case '/seting':
        return 4;
      default:
        break;
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab component={Link} to="/" label="Форма" />
        <Tab component={Link} to="/stats" label="Графіки" />
        <Tab component={Link} to="/list" label="Список" />
        <Tab component={Link} to="/debts" label="Борги" />
        <Tab component={Link} to="/seting" label="Настройки" />
      </Tabs>
    </Paper>
  );
}
