import './App.css';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as operation from './redux/operation';
import { useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lazy, Suspense } from 'react';

const MainForm = lazy(() =>
  import('./MainForm/MainForm' /*webpackChunkName:"MainForm"*/),
);
const StatisticForm = lazy(() =>
  import('./StatisticForm/StatisticForm' /*webpackChunkName:"StatisticForm"*/),
);
const ListItemsCash = lazy(() =>
  import('./ListItemsCash/ListItemsCash' /*webpackChunkName:"ListItemsCash"*/),
);
const SetingsForm = lazy(() =>
  import('./SetingsForm/SetingsForm' /*webpackChunkName:"SetingsForm"*/),
);

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(operation.getSeting());
    dispatch(operation.getCash());
  }, [dispatch]);

  return (
    <>
      <MenuNavigation />
      <Suspense fallback={<LinearProgress className="LinearProgressStyles" />}>
        {isLoading && (
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
        )}
      </Suspense>
    </>
  );
}

export default App;
