import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainForm from './MainForm/MainForm';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import ListItemsCash from './ListItemsCash/ListItemsCash';
import StatisticForm from './StatisticForm/StatisticForm';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as operation from './redux/operation';
import { useEffect } from 'react';

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.getCash());
  }, [dispatch]);

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
          <ListItemsCash />
        </Route>
      </Switch>
    </>
  );
}

export default App;
