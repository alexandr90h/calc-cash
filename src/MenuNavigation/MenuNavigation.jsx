import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // position: sticky,
    // top: 0,
  },
});

export default function MenuNavigation() {
  const classes = useStyles();

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);

  return (
    <Paper className={classes.root} fixed>
      <Tabs
      // value={value}
      // onChange={handleChange}
      // indicatorColor="primary"
      // textColor="primary"
      // centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
