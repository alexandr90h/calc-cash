import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';
import Scroll from 'react-scroll';
// var Scroll = require('react-scroll');
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // position: sticky,
    // top: 0,
  },
});

export default function MenuNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;
  const scroll = Scroll.animateScroll;

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    let nameElem = '';
    switch (newValue) {
      case 0:
        scroll.scrollToTop();
        break;
      case 1:
        nameElem = 'listItemCash';
        break;

      default:
        break;
    }
    setValue(newValue);
    console.log(nameElem);
    scroller.scrollTo(nameElem, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
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
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
