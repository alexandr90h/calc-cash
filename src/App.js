import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainForm from './MainForm/MainForm';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import ListItemsCash from './ListItemsCash/ListItemsCash';
import StatisticForm from './StatisticForm/StatisticForm';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state => state.isLoading);
  return (
    <>
      <MenuNavigation />
      <div className="App">
        <MainForm />
        {/* <ListItemsCash /> */}
      </div>
      {isLoading ? (
        <>
          <ListItemsCash name="listItemCash" />
          <StatisticForm />
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default App;
