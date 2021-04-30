import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainForm from './MainForm/MainForm';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import ListItemsCash from './ListItemsCash/ListItemsCash';
import StatisticForm from './StatisticForm/StatisticForm';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const isLoading = useSelector(state => state.isLoading);
  return (
    <>
      <MenuNavigation />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <MainForm />
          </div>
        </Route>
        <Route path="/stats">
          {isLoading ? (
            <>
              <StatisticForm />
            </>
          ) : (
            <CircularProgress />
          )}
        </Route>
        <Route path="/list">
          <ListItemsCash name="listItemCash" />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
