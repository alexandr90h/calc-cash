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
import SetingsForm from './SetingsForm/SetingsForm';

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.getCash());
    dispatch(operation.getSeting());
  }, [dispatch]);

  return (
    <>
      <MenuNavigation />
      {isLoading ? (
        <>
          <Switch>
            <Route path="/" exact>
              <div className="App">
                <MainForm />
              </div>
            </Route>
            <Route path="/stats">
              <StatisticForm />
            </Route>
            <Route path="/list">
              <ListItemsCash />
            </Route>
            <Route path="/seting">
              <SetingsForm />
            </Route>
          </Switch>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default App;
